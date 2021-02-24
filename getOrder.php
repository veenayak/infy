<?php

	$api_url = 'http://orders-api-project.us-e2.cloudhub.io/orders?customerNumber=1';

	$json_data = file_get_contents($api_url);

	$response_data = json_decode($json_data);
	echo json_encode($response_data);

