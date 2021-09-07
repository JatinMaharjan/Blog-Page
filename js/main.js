function validate(){
	var fname = document.forms['signup']['fn'].value;
	var mname = document.forms['signup']['mn'].value;
	var lname = document.forms['signup']['ln'].value;
	var email = document.forms['signup']['email'].value;
	var contact = document.forms['signup']['contact'].value;

	if (fname=="" || mname=="" || lname=="" || email=="" || contact==""){
		alert("The field is empty");
	}else{
		alert("Thank you");
	}
}