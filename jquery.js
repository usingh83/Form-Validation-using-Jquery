$(document).ready(function() {
	$('#username').on('input', function() {
	var input=$(this);
	var re = (/^[a-zA-Z0-9]{6,}$/);
	var is_name=re.test(input.val());
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
$('#password').on('input', function() {
	var input=$(this);
	var re = (/^[a-zA-Z0-9]{6,}$/);
	var is_password=re.test(input.val());
	if(is_password){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
$('#phone_no').on('input', function() {
	var input=$(this);
	var re = (/^[0-9]{10,10}$/);
	var is_phone=re.test(input.val());
	if(is_phone){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
$("#validate button").click(function(event){
	var form_data=$("#user").serializeArray();
	var error_free=true;
	for (var input in form_data){
		var element=$("#"+form_data[input]['name']);
		var valid=element.hasClass("valid");
		var error_element=$("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	}
	if (!error_free){
		event.preventDefault(); 
	}
	else{
		alert('Valid: Form ready to be submitted');
	}
});
$("#submit button").click(function(event){
	var form_data=$("#user").serializeArray();
	var error_free=true;
	for (var input in form_data){
		var element=$("#"+form_data[input]['name']);
		var valid=element.hasClass("valid");
		var error_element=$("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	}
	if (!error_free){
		event.preventDefault(); 
	}
	else{
		$("p").text("Login Successful");
		$("p").css("color","green");
	}
});
});