const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-pass");

const farmerSignupForm = document.querySelector(".farmer-signup-form");

console.log(farmerSignupForm);

passwordInput.addEventListener("input", (e) => {
	if (e.target.value === confirmPasswordInput.value) {
		passwordInput.style.border = "2px solid greenyellow";
		confirmPasswordInput.style.border = "2px solid greenyellow";
	}
});

farmerSignupForm.addEventListener("submit", (e) => {
	e.preventDefault();

	if (passwordInput.value === confirmPasswordInput.value) {
		alert("SUCCESS: Thank you for registering!");
	} else if (passwordInput.value.length <= 8) {
		alert("Password must be atleast 8 characters or more.");
		passwordInput.style.border = "2px solid red";
		confirmPasswordInput.style.border = "2px solid red";
	} else {
		passwordInput.style.border = "2px solid red";
		confirmPasswordInput.style.border = "2px solid red";
		alert("INCORRECT PASSWORD");
	}
});
