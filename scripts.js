
<script type="text/javascript">
function emailCheck(){
    var email1 = document.forms["myForm"]["email"].value;
    var email2 = document.forms["myForm"]["confirmEmail"].value;
    if(email1 != email2){
        // Display the error message
        document.getElementById("emailMismatch").style.display="inline";
        return false;
        }
    
    else{
        // Hide the error message
        document.getElementById("emailMismatch").style.display="none";
        }
}
</script>