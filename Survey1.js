//function validateForm() {
//  var x = document.forms["survey-form"]["button"].value;
//  if (x == "") {
//    alert("Thank you for submission");
//    return false;
//  }
//}

function validationForm()
{
	if(validationfails)
	{
		return false;
	}
	else
	{
		document.form.submit();
		return true;
	}
}