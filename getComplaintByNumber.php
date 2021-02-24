<?php

	$complaintNumber=$_GET['complaintNumber'];
	$url = 'http://complaints-api.us-e2.cloudhub.io/complaints/'.$complaintNumber;
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [

    	'Request-Id:asdasdsad',
      'Content-Type: application/json',

	]);

	$result = curl_exec($ch);

	curl_close( $ch );

	$response_data = json_decode($result);
	echo json_encode($response_data);


