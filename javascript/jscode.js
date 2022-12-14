function validateTextbox() {
	
var box = document.getElementById("fname");
var box2 = document.getElementById("lname");
var box3 = document.getElementById("address");
var box4 = document.getElementById("email");
var box5 = document.getElementById("mobile");
var box6 = document.getElementById("ddl");

if(box.value == ""){
	alert("Please fill your first name.");
	return false;}
if(box2.value == ""){
    alert("Please fill your last name.");
    return false;}
if(box3.value == ""){
    alert("Please fill your Adress");
    return false;}
if(box4.value == ""){
    alert("Please fill your e-mail.");
    return false;}
if(box5.value == ""){
    alert("Please fill your mobile number.");
    return false;}
if(box6.value == "0"){
    alert("Please select a course.");
    return false;}
	
}


