<?php

$visitor_email = isset($_POST['email']) ? $_POST['email'] : '';

$name = $_POST['name'];

$message = isset($_POST['message']) ? $_POST['mesage'] : '';

$email_from = 'yourname@yourwebsite.com';

 
$email_subject = "New Form submission";

$to = "manuh-vieira@hotmail.com";

 
$headers = "From: $email_from \r\n";

 

$headers .= "Reply-To: $visitor_email \r\n";

 

$headers .= "Cc: someone@domain.com \r\n";
 

$headers .= "Bcc: someoneelse@domain.com \r\n";

mail($to,$email_subject,$message,$headers);

?>
