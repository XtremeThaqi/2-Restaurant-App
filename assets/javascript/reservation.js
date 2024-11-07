// check form validation
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("messages").value;

    // Error messages
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById("dateError");
    const guestsError = document.getElementById("guestsError");
    const messageError = document.getElementById("messageError");

    if (name == "") {
        nameError.classList.remove("hidden");
    } else {
        nameError.classList.add("hidden");
    }

    if (email == "") {
        emailError.classList.remove("hidden");
    } else {
        emailError.classList.add("hidden");
    }

    if (phone == "") {
        phoneError.classList.remove("hidden");
    } else {
        phoneError.classList.add("hidden");
    }

    if (date == "") {
        dateError.classList.remove("hidden");
    } else {
        dateError.classList.add("hidden");
    }

    if (guests == "") {
        guestsError.classList.remove("hidden");
    } else {
        guestsError.classList.add("hidden");
    }

    if (message == "" ) {
        messageError.classList.remove("hidden");
    } else {
        messageError.classList.add("hidden");
    }    

   

    if (name != "" && email != "" && phone != "" && date != "" && message != "" && guests != "") {
        form.submit();
    }

    if (name == "" || email == "" || phone == "" || date == "" || message == "" || guests == "") {
        return false;
    }

});