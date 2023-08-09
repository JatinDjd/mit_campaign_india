  //global vars
  var allPhoneVal = []; //this var stores this attribute of valid phone field so other scripts can use this info.

  document.addEventListener("DOMContentLoaded", function() {
  console.log('country code loaded');
    // resource loading
    (function() {			
        // load css	
        var cssArray = [		
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css"	
        ];		
        
        for(var j=0 ; j < cssArray.length ; j++){		
            var cssMain = document.createElement('link');		
            cssMain.href = cssArray[j];		
            cssMain.rel = 'stylesheet';		
            cssMain.type = 'text/css';		
            document.getElementsByTagName('head')[0].appendChild(cssMain);		
        }		
        // load js	
        var Array = [			
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput.min.js",		
            // "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.js",		
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js",		
            // "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput.js",	
            // "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js",		
            // "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.min.js"		
        ];		
        for(var i=0 ; i < Array.length ; i++){		
            var fileMain = document.createElement('script');		
            fileMain.src = Array[i];			
            fileMain.type = 'text/javascript';		
            fileMain.async = true;
            document.getElementsByTagName('head')[0].appendChild(fileMain);		
            //initlize below code when last js is loaded succefully to the dom
            if(Array.length <= i+1){
              fileMain.onload = function(){
                  runInitilization();
              };
            }
        }

    })();
    //End of resource loading




   function runInitilization(){ 

     // initialise plugin
     var totalPhone = document.getElementsByClassName('intl-phone')
     var totalError = document.getElementsByClassName('intl-error')
     var iti = [];
     for(var i=0;i<totalPhone.length;i++){
      iti[i] = window.intlTelInput(totalPhone[i], {
        separateDialCode: true,
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "us";
              callback(countryCode);
            });
          },
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js"
        });
        console.log('error');
        activateNumberValEvent(iti[i],i);
      }
      //plugin initialised
      
      let number = 0;
      let footercode = 0;

      // here, the index maps to the error code returned from getValidationError - see readme
      var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number","ok"];
  
   
      // on blur: validate
      function activateNumberValEvent(ele,i){

        totalPhone[i].addEventListener('blur', function() {
          reset(i);
    
          if (totalPhone[i].value.trim()) {
            if (ele.isValidNumber()) {
              number = ele.getSelectedCountryData();
              footercode = number['dialCode'];
              allPhoneVal[i] = this;
              console.log(allPhoneVal[i]);
            } else {
              totalPhone[i].classList.add("error-code");
              var errorCode = ele.getValidationError();
              totalError[i].innerHTML = errorMap[errorCode];
              totalError[i].classList.remove("country-code-hide");
              allPhoneVal[i] = "invalid";
              console.log(allPhoneVal[i]);
            }
          }
        });
        
        // on "keyup" or "change" flag: reset
        totalPhone[i].addEventListener('change', reset(i));
        totalPhone[i].addEventListener('keyup', reset(i));
      }
      //tools
      function reset(i) {
        totalPhone[i].classList.remove("error-code");
        totalError[i].innerHTML = "";
        totalError[i].classList.add("country-code-hide");
      };
    }
  });