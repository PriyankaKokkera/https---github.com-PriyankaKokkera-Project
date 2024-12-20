var otp=0;
function gererateOTPDisplay(){
    document.getElementById("otpcontainer").style.display="block"
    var num1=Math.floor(Math.random()*10);
    var num2=Math.floor(Math.random()*10);
    var num3=Math.floor(Math.random()*10);
    var num4=Math.floor(Math.random()*10);
    otp=`${num1}${num2}${num3}${num4}`;
    document.getElementById("displayOTP").innerHTML=otp
}
function closeOTPDisplay(){
    document.getElementById("otpcontainer").style.display="none"

}
function checkOTP(){
    var userotp=document.getElementById("inp").value;
    console.log(userotp)
    console.log(otp)
    if(userotp==otp){
        document.getElementById("result").innerHTML="Access Granted"
        document.getElementById("result").style.color="green"

    }
    else{
        document.getElementById("result").innerHTML="Access Denied"
        document.getElementById("result").style.color="red"


    }
}
  