<?php
if($_POST)
    {
    $to = "s.danny.dp@gmail.com"; //куда отправлять письмо
    $from = $_POST['user_email']; // от кого
    $subject = "сайт"; //тема
    $message = 'Имя: '.$_POST['user_name'].'; Телефон: '.$_POST['user_phone'].';Сообщение: '.$_POST['user_message'].';';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <dsportfolio.co.ua>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    if ($result){
        echo "<p>Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи</p>";
    }
    }
?>