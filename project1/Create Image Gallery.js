const inputBox=document.getElementById("password");
const eyeIcon=document.getElementById("eye-icon");
function eyeopen(){
    if(inputBox.type=="password"){
        inputBox.type="text";
        eyeIcon.src="../../asset/image/eye-open.png";

    }
    else{
        inputBox.type="password";
        eyeIcon.src="../../asset/image/eye-close.png"
    }
}

