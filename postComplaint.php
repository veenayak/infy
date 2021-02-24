<?php

	$complaintDescription=$_POST['complaintDescription'];
	$orderNumber=$_POST['orderNumber'];
	$productCode=$_POST['productCode'];

	$url = 'http://complaints-api.us-e2.cloudhub.io/complaints';
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_POST, 1);               

	curl_setopt($ch, CURLOPT_HTTPHEADER, [

    	'Request-Id:asdasdsad',
      'Content-Type: application/json',

	]);
	$payload = json_encode( array( 'complaintDescription' => $complaintDescription,'orderNumber' => (int)$orderNumber,'productCode'  => $productCode ) );
	curl_setopt( $ch, CURLOPT_POSTFIELDS, $payload );

	$result = curl_exec($ch);

	curl_close( $ch );

	echo json_encode($result);


