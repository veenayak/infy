<?php

	$complaintDescription=$_POST['complaintDescription'];
	$complaintNumber=$_POST['complaintNumber'];
	$url = 'http://complaints-api.us-e2.cloudhub.io/complaints/'.(int)$complaintNumber;
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_POST, 1);               

	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');

	curl_setopt($ch, CURLOPT_HTTPHEADER, [

    	'Request-Id:asdasdsad',
      'Content-Type: application/json',

	]);
	$payload = json_encode( array( 'complaintDescription' => $complaintDescription) );
	curl_setopt( $ch, CURLOPT_POSTFIELDS, $payload );

	$result = curl_exec($ch);

	curl_close( $ch );

	echo json_encode($result);


