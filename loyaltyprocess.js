// first we wait the DOM object is loaded fully
document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.getElementById("loyaltyForm");

    userForm.addEventListener("submit", function(event) {
        event.preventDefault(); // blocks the event from refreshing the page automatically
        let validForm = true;

        let userData = {
            "fname": document.getElementById("fname").value.trim(),
            "lname": document.getElementById("lname").value.trim(),
            "email": document.getElementById("email").value.trim(),
            "acceptTOS": document.getElementById("acceptTOS").checked
        };

        if (/\d/.test(userData.fname)) {
            const labels = document.querySelectorAll('label[for="fname"]');

            let label = labels[0];
            label.id = "errorLabel";
            label.innerHTML = 'Invalid name: numbers detected!'

            setTimeout(() => {
                labels.innerHTML = 'First name:'
                label.id = "standardLabel";
            }, 5000);

            validForm = false;
        }

        if (/\d/.test(userData.lname)) {
            const labels = document.querySelectorAll('label[for="lname"]');

            let label = labels[0];
            label.id = "errorLabel";
            label.innerHTML = 'Invalid last name: numbers detected!'

            setTimeout(() => {
                labels.innerHTML = 'Last name:'
                label.id = "standardLabel";
            }, 5000);

            validForm = false;
        }

        if (validForm) {
            console.log("Form submitted successfully!");
            // at this point we'd insert some sort of POST request to a backend's API in order to further sanitize this data on the server & save it. 
            window.location.reload()
        }
    });
});
