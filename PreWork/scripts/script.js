 // Function that is called when the user presses the submit button in the form.
function processSubmit(event) {
    event.preventDefault();
    alert("Thank you for your comments!");
}

// When the user presses the submit button call the "processSubmit" function
document.getElementById("formElement").addEventListener("submit", processSubmit);


