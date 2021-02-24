<?php

	$customerNumber=$_GET['customerNumber'];
	$orderNumber=$_GET['orderNumber'];
	$orderDate=$_GET['orderDate'];


	$url = 'http://complaints-api.us-e2.cloudhub.io/complaints';
	$check = 0;
	if($customerNumber!="false"){
		$url = $url.'?customerNumber='.$customerNumber;
		$check = 1;
	}
	if($orderNumber!="false"){
		if($check!=0){
			$url = $url.'&orderNumber='.$orderNumber;
		
		}
		else{
			$url = $url.'?orderNumber='.$orderNumber;
			$check = 1;

		}
	}
	if($orderDate!="false"){
		if($check!=0){
			$url = $url.'&orderDate='.$orderDate;
		}
		else{
			$url = $url.'?orderDate='.$orderDate;
		}
	}
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
	


