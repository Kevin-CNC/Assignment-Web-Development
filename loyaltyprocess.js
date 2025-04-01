// awaits for the full DOM object to be loaded first
document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.getElementById("loyaltyForm");

    userForm.addEventListener("submit", function(_){ // confirm button fires the "submit" event from the form; hence this is performed

        let userData = {
            "fname":document.getElementById("fname").value.trim(),
            "lname":document.getElementById("lname").value.trim(),
            "email":document.getElementById("email").value.trim(),
            "acceptTOS":document.getElementById("acceptTOS").checked
        }

        console.log(userData)
        // user data is extracted 
    });
});
