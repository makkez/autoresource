<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('metallmaster@bk.ru', 'ROBOT');
    $mail->addAddress('mkezikov@yandex.ru');
    $mail->Subject = 'Заявка обратной связи';

    $body = '<p>Здравствуйте!</p>'

    if (trim(!empty($_POST['phone']))) {
        $body.= '<p>Прошу связаться со мной по номеру: <b>'.$_POST['phone'].'</b>.</p><p>Спасибо!</p>';
    }

    $mail->Body = $body;
?>