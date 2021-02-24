function fetchNew(){
	var customerNumber =  getUrlParameter('customerNumber');
	var complaintNumber =  getUrlParameter('complaintNumber');
	var orderDate =  getUrlParameter('orderDate');
	var orderNumber =  getUrlParameter('orderNumber');


	if(customerNumber != false || orderDate != false || orderNumber != false){
		getComplaintByCustomer(customerNumber,orderDate,orderNumber);
	}
	else if(complaintNumber != false){
		getComplaintByNumber(complaintNumber);
	}
	else{
		alert("please enter one of these query param - customerNumber,orderDate,orderNumber,complaintNumber");
	}
}
function getComplaintByCustomer(customerNumber,orderDate,orderNumber){
	console.log(customerNumber);
		console.log(orderDate);

	console.log(orderNumber);

	$.ajax({
		type: "GET",
		url: "/fa4/getComplaintsByCustomer.php",
	    dataType: "json",
	    data: {customerNumber:customerNumber,orderDate:orderDate,orderNumber:orderNumber },
		success:function(res){
			console.log(res);
			var html = "";
			var i = 0;
			var jsonText = JSON.stringify(res,undefined,'\t');
			$("#complaintJson .data pre").text(jsonText);
			if(res[0].complaintNumber!=null){
				$.each(res,function(index,value){
					i++;
					if(value.active==true){
						html = html + '<div><span>'+i+'.</span><input value='+value.complaintNumber+' hidden>'+'<p>'+value.complaintDescription+'</p><i class="fas fa-check"></i></div>';	
					}
					else{
						html = html + '<div><span>'+i+'.</span><input value='+value.complaintNumber+' hidden>'+'<p>'+value.complaintDescription+'</p><i class="fas fa-exclamation"></i></div>';	
					}
					
				});	
				$("#complaintDiv>div").html(html);
			}
			else{
				$("#complaintDiv>div").html("No Complaints");
			}
			
		},
		error:function(res){
			console.log(res);
		}
	});

}
function postComplaint(complaintDescription,orderNumber,productCode){


	$.ajax({
		type: "POST",
		url: "/fa4/postComplaint.php",
	    dataType: "json",
	    data: {complaintDescription:complaintDescription,orderNumber:orderNumber,productCode:productCode },
		success:function(res){
			res = JSON.parse(res);
			alert(res.message);
			fetchNew();
		},
		error:function(res){
			console.log(res);
		}
	});

}
function patchComplaint(complaintDescription,complaintNumber){


	$.ajax({
		type: "POST",
		url: "/fa4/patchComplaint.php",
	    dataType: "json",
	    data: {complaintDescription:complaintDescription,complaintNumber:complaintNumber},
		success:function(res){
			res = JSON.parse(res);
			alert(res.message);
			fetchNew();
		},
		error:function(res){
			console.log(res);
		}
	});

}
function resolveComplaint(complaintNumber){


	$.ajax({
		type: "POST",
		url: "/fa4/resolveComplaint.php",
	    dataType: "json",
	    data: {complaintNumber:complaintNumber},
		success:function(res){
			res = JSON.parse(res);
			alert(res.message);
			fetchNew();
		},
		error:function(res){
			console.log(res);
		}
	});

}
function deleteComplaint(complaintNumber){


	$.ajax({
		type: "POST",
		url: "/fa4/deleteComplaint.php",
	    dataType: "json",
	    data: {complaintNumber:complaintNumber},
		success:function(res){
			res = JSON.parse(res);
			alert(res.message);
			fetchNew();
		},
		error:function(res){
			console.log(res);
		}
	});

}
function getComplaintByNumber(complaintNumber){
	console.log(complaintNumber);
	$.ajax({
		type: "GET",
		url: "/fa4/getComplaintByNumber.php",
	    dataType: "json",
	    data: {complaintNumber:complaintNumber },
		success:function(res){
			console.log(res);
			var html = "";
			var i = 1;
			var jsonText = JSON.stringify(res,undefined,'\t');
			$("#complaintJson .data pre").text(jsonText);
			if(res.complaintNumber!=null){
				if(value.active==true){
					html = html + '<div><span>'+i+'.</span><input value='+value.complaintNumber+' hidden>'+'<p>'+value.complaintDescription+'</p><i class="fas fa-check"></i></div>';	
				}
				else{
					html = html + '<div><span>'+i+'.</span><input value='+value.complaintNumber+' hidden>'+'<p>'+value.complaintDescription+'</p><i class="fas fa-exclamation"></i></div>';	
				}
				$("#complaintDiv>div").html(html);

			}
			else{
				$("#complaintDiv>div").html("No Complaints");
			}
		},
		error:function(res){
			console.log(res);
		}
	});

}
function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
	    sURLVariables = sPageURL.split('&'),
	    sParameterName,
	    i;

	for (i = 0; i < sURLVariables.length; i++) {
	    sParameterName = sURLVariables[i].split('=');

	    if (sParameterName[0] === sParam) {
	        return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	    }
	}
	return false;
};
