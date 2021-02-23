<?php

	$emailError = $emailSuccess = "";
	if(isset($_POST['submit'])){

	    $to = "info@abistechnologies.com.ng";
	    $from = "<info@abistechnologies.com.ng>";
	    $name = $_POST['name'];
	    $csubject = $_POST['subject'];
	    $service = $_POST['service'];
	    $email = $_POST['email'];
	    $cmessage = $_POST['message'];

	    $headers = "From: $from";
		$headers = "From: " . $from . "\r\n";
		$headers .= "Reply-To: ". $from . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	    $subject = "Contact Us Form";

	    $logo = 'assets/images/footer-logo.png';
	    $link = '#';

		$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
		$body .= "<table style='width: 100%;'>";
		$body .= "<thead style='text-align: left;'><tr><td style='border:none;' colspan='2'>";
		$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
		$body .= "</td></tr><tr><td style='border:none;><strong>From:</strong> {$from}</td></tr></thead><tbody><tr>";
		$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
		$body .= "</tr>";
		$body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$csubject}</td></tr>";
		$body .= "<tr><td></td></tr>";
		$body .= "<tr><td style='border:none;'><strong>Email:</strong> {$email}</td></tr>";
		$body .= "<tr><td></td></tr>";
		$body .= "<tr><td style='border:none;'><strong>Service:</strong> {$service}</td></tr>";
		$body .= "<tr><td></td></tr>";
		$body .= "<tr><td colspan='2' style='border:none;'><strong>Message:</strong> <br>{$cmessage}</td></tr>";
		$body .= "</tbody></table>";
		$body .= "</body></html>";
		echo $body;
		die();

	    $send = @mail($to, $subject, $body, $headers);
	    if(!$send){
	    	$emailError .= "<div class='alert alert-danger'>Could not send mail</div>";
	    }else{
	    	$emailSuccess .= "<div class='alert alert-success'>Mail sent</div>";
	    }

	}


?>