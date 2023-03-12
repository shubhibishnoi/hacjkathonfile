<?php
    $name=$_POST['name'];
    $visitor_email=$_POST['email'];
    $message=$_POST['message'];

    $emil_form='20pallavisoni@gmail.com' ;
    $email_subject="New Form Submission";
    $email_body="User Name:$name.\n".
                   "User Email:$visitor_email.\n".
                      "User Message:$message.\n";

    $to="sonihimanshi19@gmail.com";
    $headers="From:$email_form\r\n";
    $headers.="Reply-To:$visitor_email\r\n";
    mail($to,email_subject,$email_body,$headers);
    header("Location:Surveyform1.html");

?>