// common-ajax-script.js

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll(".campaign-form");
    forms.forEach(form => {
        form.addEventListener("submit", function (event) {
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

                // Custom email format validation
                if (fieldName === "email" && !isValidEmail(input.value)) {
                    hasErrors = true;
                    errorMessageElement.textContent = "Invalid email format.";
                }
                //check if allPhoneVal undefined.
                if (fieldName === "phone" && !isUndefined(allPhoneVal)){
                    if(!allPhoneVal.includes(input)){
                    hasErrors = true;
                    errorMessageElement.textContent = "Please enter valid phone number.";
                    }
                }
            });

            if (hasErrors) {
                return;
            }

            //add IP before sending
            // ! how we will show the response? redirect or popup key setting. 
            // !add loading animation. 
            // !disable submit button for 2 sec.
            // !write something about naming classes.
            // !chatgpt tips - ask for optimsations, solutions.
            // !resposive images guide
            $.ajax({
                url: "https://masterinfotech.com/api/generate-token",
                type: "post",
                success: function (response) {
                    console.log(response);
                    if (response.token) {
                        submitform(response.token);
                        console.log('submitform done');
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });

            function submitform(token) {
                var page_url = window.location.href;
                formData.append("pagename", page_url);
                formData.append("country_code", "in");
                var formDataObject = {};
                    formData.forEach((value, key) => {
                        formDataObject[key] = value;
                    });
                $.ajax({
                    url: "https://masterinfotech.com/api/verify-token",
                    type: "post",
                    headers: { 'token': token },
                    data: formDataObject,
                    success: function (response) {
                        console.log(response + "MIT ");
                        window.location.href = "https://service.masterinfotech.com/thankyou/";
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown + "MIT ");
                    }
                });
            }

        });
    });
});

// Custom email format validation
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Custom phone number length validation
// function isValidPhoneNumber(phoneNumber) {
//     const phoneNumberPattern = /^\d{10}$/;
//     return phoneNumberPattern.test(phoneNumber);
// }

//tool
function isUndefined(variable) {
    return typeof variable === "undefined";
}


    // ! how we will show the response? redirect or popup key setting. 
    // !add loading animation. 
    // !disable submit button for 2 sec.
    // !write something about naming classes.
    // !chatgpt tips - ask for optimsations, solutions.
    // !resposive images guide