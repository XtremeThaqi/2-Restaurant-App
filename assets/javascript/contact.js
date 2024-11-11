document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const fields = ["name", "email", "message"];
    const successMessage = document.getElementById("successMessage");

    fields.forEach((field) => {
        const input = document.getElementById(field);
        const errorElement = document.getElementById(`${field}Error`);  

        if (input && errorElement) {
            input.addEventListener("input", () => {
                if (input.value.trim() === "") {
                    errorElement.classList.remove("hidden");
                } else {
                    errorElement.classList.add("hidden");
                }
            });
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        hideMessages(); // Hide previous messages

        let isValid = true; // Track if all fields are filled correctly

        fields.forEach((field) => {
            const input = document.getElementById(field);
            const errorElement = document.getElementById(`${field}Error`);

            if (input && errorElement) {
                if (input.value.trim() === "") {
                    // Check if field is empty
                    errorElement.classList.remove("hidden"); // Show field-specific error
                    errorElement.textContent = `You didn’t fill the ${field} section.`; // Custom error message
                    isValid = false; // Mark form as invalid
                } else {
                    errorElement.classList.add("hidden"); // Hide error if field is valid
                }
            }
        });

        // Show either success or error message
        if (isValid) {
            successMessage.classList.remove("hidden");
            form.reset(); // Reset form only if all fields are valid
        }
    });

    // Function to hide all error and success messages initially
    function hideMessages() {
        document.getElementById("successMessage").classList.add("hidden");
        fields.forEach((field) => {
            const errorElement = document.getElementById(`${field}Error`);
            if (errorElement) errorElement.classList.add("hidden");
        });
    }
});