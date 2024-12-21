let c=0;
let incre=document.getElementById("increment-btn");
let decre=document.getElementById("decrement-btn");
let count=document.getElementById("counter-value");
let reset=document.getElementById("reset")
incre.addEventListener("click",()=>{
    c++;
    count.innerHTML=c;
});
decre.addEventListener("click",()=>{
    c--;
    count.innerHTML=c;
});

reset.addEventListener("click",resettozero);
function resettozero(){
    c=0;
    count.innerHTML=c;
}


