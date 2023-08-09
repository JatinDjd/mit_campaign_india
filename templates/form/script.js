// common-ajax-script.js

document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll(".campaign-form");
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            for (const value of formData.values()) {
                console.log(value);
              }
            // Validate form fields
            let hasErrors = false;
            form.querySelectorAll("input").forEach(input => {
                const fieldName = input.getAttribute("name");
                const errorMessageElement = form.querySelector(`[data-for="${fieldName}"]`);
                
                // Template for validation test
                // if (!input.checkValidity()) {
                //     hasErrors = true;
                //     errorMessageElement.textContent = input.validationMessage;
                // } else {
                //     errorMessageElement.textContent = "";
                // }
                
                // Custom email format validation
                if (fieldName === "email" && !isValidEmail(input.value)) {
                    hasErrors = true;
                    errorMessageElement.textContent = "Invalid email format.";
                }

                // Custom phone number length validation
                if (fieldName === "phone" && !isUndefined(allPhoneVal)){
                    var valid = 0;
                    for(var i=0;i<allPhoneVal.length;i++){
                        if(input == allPhoneVal[i]) valid =  1;
                    }
                    if(valid == 0){
                    hasErrors = true;
                    errorMessageElement.textContent = "Please enter valid phone number.";
                    }
                }
            });

            if (hasErrors) {
                return;
            }
            fetch("https://my.com/sendmail", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server if needed
            })
            .catch(error => {
                form.querySelector(`[data-for="error"]`).textContent = "Error submitting form: " + error;
                console.error("Error submitting form:", error);
            });
        });
    });
});

// Custom email format validation
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Custom phone number length validation
function isValidPhoneNumber(phoneNumber) {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
}

//tool
function isUndefined(variable) {
    return typeof variable === "undefined";
}