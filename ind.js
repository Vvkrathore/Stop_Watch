// initially take a declaration value of items 
let tens =00;
let second=00;
let minute=00;

//take the value by ID
let appendtens=document.getElementById("tens")

let appendsecond=document.getElementById("seconds")
 let appendminute=document.getElementById("minutes")
let startbutton = document.getElementById("strt")

let stopbuttton= document.getElementById("stp")

let resetbutton=  document.getElementById("rset")
let interval;
let user= true;




let timeexist= document.getElementById("gettime")

// event listener method will used
startbutton.addEventListener("click", myfunction)
stopbuttton.addEventListener("click",myfunction1)
resetbutton.addEventListener("click",myfunction2)


 function startTiming(){
    tens++;
    // firstly   define the condition of millisecond

    if(tens<9){
        appendtens.innerHTML="0"+tens

    }
    if(tens>9){
        appendtens.innerHTML=tens;
    }
    // define the condition of second 
    if(tens>60){
        second++;
        appendsecond.innerHTML="0"+second;
        tens=0
        appendtens.innerHTML="0"+0

    
    if(second>9){
        appendsecond.innerHTML=second
    }

}
// then define the condition of minute  
    if(second>59){
        minute++;
        appendminute.innerHTML="0"+minute
        second=0;
        appendsecond.innerHTML="0"+0;
    }
    
    if(minute>9){
        appendminute.innerHTML=minute
    }

}

// click the start button
function myfunction(){
if(user===true){
    
    interval=setInterval(startTiming)
  
}
user =false;
}
// click the stop button on shows condition

function myfunction1(){
    user=true
    clearInterval(interval)
}
// click the reset button

function myfunction2(){
    user=true;
    clearInterval(interval)
    appendtens.innerHTML="00"
    appendsecond.innerHTML="00"
    appendminute.innerHTML="00"
    second=00
    tens=00
    minute=00
}
