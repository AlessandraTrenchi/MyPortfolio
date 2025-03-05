// Function to load EmailJS library dynamically
function loadEmailJS() {
    var script = document.createElement('script');
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    document.head.appendChild(script);
}

// Function to send email
function sendEmail(emailContent) {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID");

    // Email parameters
    var params = {
        to_email: "alessandratrenchi9@gmail.com", // Destination email address
        from_name: "Sender Name",
        to_name: "Receiver Name",
        message: emailContent
    };

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Email sent successfully!");
        })
        .catch(function(error) {
            console.log("Email sending failed:", error);
            alert("Failed to send email. Please try again later.");
        });
}

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function() {
    // Load EmailJS library dynamically
    loadEmailJS();

    var form = document.querySelector('.php-email-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var formData = new FormData(form);
        var emailContent = '';
        formData.forEach(function(value, key) {
            emailContent += key + ': ' + value + '\n';
        });

        // Send email
        sendEmail(emailContent);

        // Reset the form after submission
        form.reset();
    });
});
