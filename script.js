function IsEmail () {
  var email = document.getElementById("email");
  var isemail = document.getElementById("isemail")
  if(email.contains("@"))
{
    isemail.innerHTML = "Die Email Adresse wurde abgesendet"
}
else{
    isemail.innerHTML = "Die angegebene Email Adresse existiert nicht!"
}
}