<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //от кого письмо
    $mail->setForm('maks.dubovik.98@gmail.com', 'Макс');
    //кому отправить
    $mail->addAdress('maks.dubovik.98@mail.ru');
    //тема письма
    $mail->Subject = 'Feedback Marvel Power Group';

    //тело письма
    $body = '<h1>New contact!</h1>';

    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if (trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }

    $mail->Body = $body;

    //отправляем
    if (!$mail->send()) {
        $massage = 'Error';
    } else {
        $message = 'OK';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>

