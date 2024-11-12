document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const fields = ["username", "email", "message"];
  
    // Function to hide all error and success messages initially
    const hideMessages = () => {
      document.getElementById("successMessage").classList.add("hidden");
      fields.forEach((field) => {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) errorElement.classList.add("hidden");
      });
    };
  
    // Form submission event listener
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
        document.getElementById("successMessage").classList.remove("hidden");
        form.reset(); // Reset form only if all fields are valid
      }
    });
  
    // Optional close button event to hide success message
    const closeMessage = document.getElementById("closeMessage");
    if (closeMessage) {
      closeMessage.addEventListener("click", () => {
        document.getElementById("successMessage").classList.add("hidden");
      });
    }
  });
  