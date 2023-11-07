/* Place your JavaScript in this file 

let emailConfirmation = false;
let emailconfirmWidget = document.querySelector("#emailConfirm");
let emailWidget = document.querySelector("#email");
emailWidget.addEventListener("input", email);
emailconfirmWidget.addEventListener("input", confirmEmail);

function checkEmail(){
    let email1 = emailWidget.value;  
    email1 = email1.trim();
    let email2 = emailconfirmWidget.value;
    email2 = email2.trim()
   
}

function confirmEmail(email){
  if (email1 === email2) {
        alert(Emails Match!)
    }
    else{
        alert(Emails don't Match!)
    }
}

let formWidget = document.querySelector("#myForm");
formWidget.addEventListener("submit", checkForm);

function checkForm(event){
    if(!confirmEmail){
        event.preventDefault();
    }
}
   <script>
          function verify(){
            if(document.getElementById("email").value === document.getElementById("confirmEmail").value) {

                alert("matched")

            } else {
              document.getElementById("submit").setAttribute("disabled", "disabled");
              alert("not matched")
              }
          }
     

function confirmEmail(email){
    let emailconfirmWidget = document.querySelector("#emailConfirm");
    confirmation = confirmation.trim();

    let emailWidget = document.querySelector("#email");

    let emailconfirmWidget = document.querySelector("#emailConfirm");
    
    if (emailWidget != emailconfirmWidget){
        alert("Emails Do Not Match!");
    }
    else{
        alert("Emails Match!");
    }
    
}

let confirm = document.querySelector("#emailConfirm");
confirm.addEventListener("input", (confirmEmail));
let email = document.querySelector("#email");
email.addEventListener("input", (checkemail))

function validateForm(event){
    let myForm = document.querySelector("#myForm");
    myForm.email = myForm.confirmEmail;

    if (myForm.email.value != myForm.confirmEmail.value){
        alert("wrong");
    }
}
let myForm = document.querySelector("#myForm");
myForm.validateForm.addEventListener("click",validateForm);


/*
const form = document.querySelector("form");
const email = document.getElementById("confirmEmail");
const emailError = document.querySelector("#confirmmEmail + span.error");
email.addEventListener("input", checkEmail); 


var email1 = document.getElementById("email");
var email2 = document.getElementById("confirmEmail");

if (email1 != email2){
    alert("Emails do not match!");
}





const myForm = document.querySelector("#myForm");
const email = document.querySelector("#email");
const emailConfirm = document.querySelector("#confirmEMail");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", e => {
    e.preventDefault();
    confirmEmail();
});

function onSubmit(e){
    e.preventDefault();
    console.log(email)
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".msg");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
}

const confirmEmail = () =>{
    var email1 = email.value.trim();
    var email2 = confirmEmail.value.trim();

    if (email1 != email2){
        setError("Emails do not match!");
    }
}

*/


<script type="text/javascript">
        function emailCheck(){
            var email1 = document.forms["myForm"]["email"].value;
            var email2 = document.forms["myForm"]["confirmEmail"].value;
            if(email1 != email2){
                // Display the error message
                document.getElementById("emailMismatch").style.display="inline";
                return false;
            }else{
// Hide the error message
                document.getElementById("emailMismatch").style.display="none";
            }
        }
        </script>