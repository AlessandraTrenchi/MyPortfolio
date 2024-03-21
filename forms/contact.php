<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = trim($_POST["YourName"]);
    $email = trim($_POST["YourEmail"]);
    $subject = trim($_POST["Subject"]);
    $message = trim($_POST["Message"]);

    // Validate form fields (you may add more validation as needed)
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        // Handle validation errors
        echo "Please fill in all fields.";
        exit;
    }

    // Set recipient email address
    $to = "alessandratrenchi9@gmail.com"; 

    // Set email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Construct email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n";
    $email_message .= "Message: $message\n";

    // Set email headers
    $headers = "From: $name <$email>\r\nReply-To: $email\r\n";

    // Send email
    if (mail($to, $email_subject, $email_message, $headers)) {
        // Email sent successfully
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        // Failed to send email
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // If the form is not submitted, redirect or display an error message
    echo "Access denied.";
}
?>
