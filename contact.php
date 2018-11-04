<?php

if($_POST["submit"]) {
    $recipient="your@email.address";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

if($_POST["submit"]) {
    $recipient="rjouejati@gmail.com";
    $subject="Rafic's Portfolio Inquiry";
    $name=$_POST["name"];
    $email=$_POST["email"];
    $phone=$_POST["phone"];
    $message=$_POST["message"];

    $mailBody="Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    mail($recipient, $subject, $mailBody, "From: $name <$email>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>