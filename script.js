const submitButton = document.querySelector(".create-account-btn");
const formInputs = document.querySelectorAll(".form-container input");
const passwordInputContainer = document.querySelector("fieldset span:nth-child(6)")
const invalidPasswordMessage = document.createElement('p');
const passwordInput = formInputs[4];
const confirmPasswordInput = formInputs[5];

// Check if input is valid
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.validity.valid){
            input.style.border = "1px solid greenyellow";
        } else {
            input.style.border = "1px solid red";
        }
    })
});

// Password confimation validity check 
confirmPasswordInput.addEventListener('change', () => {
    if(confirmPasswordInput.value == passwordInput.value){
        confirmPasswordInput.style.border = "1px solid greenyellow";
        passwordInput.style.border = "1px solid greenyellow";

        confirmPasswordInput.validity.valid = true;
        passwordInput.validity.valid = true;
        
        passwordInput.setCustomValidity('');

        passwordInputContainer.removeChild(invalidPasswordMessage);
    } else {
        confirmPasswordInput.style.border = "1px solid red";
        passwordInput.style.border = "1px solid red";


        confirmPasswordInput.validity.valid = false;
        passwordInput.validity.valid = false;
        passwordInput.setCustomValidity("Password does not match.")

        invalidPasswordMessage.classList.add("invalid-password");
        invalidPasswordMessage.textContent = "*Password did not match."
        passwordInputContainer.appendChild(invalidPasswordMessage);
    }
});


submitButton.addEventListener("click", () => {

    // Check if input is invalid
    formInputs.forEach(input => {
        input.setAttribute("required", "required");
    });
});