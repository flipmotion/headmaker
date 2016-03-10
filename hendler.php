<?php
    $user=$_POST['user'];
    $phone=$_POST['phone'];
    $date=$_POST['date'];
    $time=$_POST['time'];
    $comment=$_POST['comment'];
 	$to = "head123455@yandex.ru";
    $subject = "Заявка!";
    if($user){
    	$message = "<br>user: " . $user . "<br>Phone:" . $phone . "<br>Date:" . $date . "<br>Time:" . $time . "<br>Comment:" . $comment;
    }
    else $message = "<br>user: " . $user . "<br>Phone:" . $phone . "<br>Date:" . $date . "<br>Time:" . $time . "<br>Comment:" . $comment;
    
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: wth\r\n";
    //Если форма была отправлена, то выводим ее содержимое на экран
    if (isset($_POST["user"])) { 

        if (!mail($to, $subject, $message, $headers)) {
            $errors[] = "Ошибка, сообщение не отправлено. Попробуйте позже.";
        }
    }
?>
