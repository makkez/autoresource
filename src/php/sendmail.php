<?php

    require __DIR__.'/vendor/PHPMailer/PHPMailer.php';
    require __DIR__.'/vendor/PHPMailer/SMTP.php';
    require __DIR__.'/vendor/PHPMailer/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    $phone = trim($_POST['phone']);

    $title = 'Заявка обратной связи';
    $body = "
    <p>Здравствуйте!</p>
    <p>Прошу связаться со мной по номеру: 
    <b> $phone</b>.</p>
    <p>Спасибо!</p>
    ";

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->CharSet = 'UTF-8';
        $mail->SMTPAuth = true;
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        $mail->Host = 'smtp.mail.ru';
        $mail->Username = 'metallmaster@bk.ru';
        $mail->Password = '40ivFuU4LZrjABCiiP3w';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom('metallmaster@bk.ru', 'Имя отправителя');
		
        /*
		$mail->smtpConnect(
			array(
				"ssl" => array(
					"verify_peer" => false,
					"verify_peer_name" => false,
					"allow_self_signed" => true
				)
			)
		);
        */

        $mail->addAddress('mkezikov@yandex.ru');

        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;

        if ($mail->send()) { $result = "success"; } 
        else { $result = "error"; }
    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>