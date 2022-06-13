var attempt = 3; 


function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "mostafa" && password == "123"){
		alert ("تم التسجيل بنجاح");
		window.location = "success.html"; 
		return false;
	}
	else{
		attempt --;
		alert("اسم المستخدم وكلمه المرور غير صحيحه "+attempt+" خطأ");
		
		
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}