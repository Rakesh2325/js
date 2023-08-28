var Name = document.getElementById("Name");
var FatherName = document.getElementById("Father-Name");
var Email = document.getElementById("Email_Address");
var Password = document.getElementById("Password");
var CNIC = document.getElementById("CNIC_Number");
var Mobile = document.getElementById("Mobile_Number");
var Courses = document.getElementById("Select_Courses");
var Qualification = document.getElementById("Select_Qualification");
var Gender = document.getElementById("Select_Gender");

var message = document.getElementById("message");
var success = document.getElementById("success");
function addData(){
if (Name.value === ""){
    //  alert("Full name required")
     message.style.display = "block";
     setTimeout(()=>{
        message.style.display = "none";
     },2000);
   } else if(FatherName.value === ""){
    message2.style.display = "block";
    setTimeout(()=>{
       message2.style.display = "none";
    },2000);
   }else if(Email.value === ""){
    message3.style.display = "block";
    setTimeout(()=>{
       message3.style.display = "none";
    },2000);
   }else if(Password.value === ""){
    message4.style.display = "block";
    setTimeout(()=>{
       message4.style.display = "none";
    },2000);
   } else if(CNIC.value === ""){
    message5.style.display = "block";
    setTimeout(()=>{
       message5.style.display = "none";
    },2000);
   } else if(Mobile.value === ""){
    message6.style.display = "block";
    setTimeout(()=>{
       message6.style.display = "none";
    },2000);
   } else if(Courses.value === ""){
    message7.style.display = "block";
    setTimeout(()=>{
       message7.style.display = "none";
    },2000);
   } else if(Qualification.value === ""){
    message8.style.display = "block";
    setTimeout(()=>{
       message8.style.display = "none";
    },2000);
   } else if(Gender.value === ""){
    message9.style.display = "block";
    setTimeout(()=>{
       message9.style.display = "none";
    },2000);
   }  else {
    message.style.display ="none"
    success.style.display ="block"
    console.log(Name.value);
    console.log(FatherName.value);
    console.log(Email.value);
    console.log(Password.value);
    console.log(CNIC.value);
    console.log(Mobile.value);
    console.log(Courses.value);
    console.log(Qualification.value);
    console.log(Gender.value);
    setTimeout(()=>{
        success.style.display = "none ";
     },2000);
   }
}
