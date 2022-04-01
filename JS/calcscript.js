const screen=document.getElementById("answer")
const inputvar=document.getElementById("input")
const equalbtn=document.getElementById("equal")
const clrbtn=document.getElementById("clear")
const delbtn=document.getElementById("del")


equalbtn.addEventListener("click", calc);
function calc() {
 
    try {
        
        let answer=eval(screen.innerHTML)
        let finalanswer=""
    
        function checkNumber(answer) {
    
            // check if the passed value is a number
            if(typeof answer == 'number' && !isNaN(answer)){
            
                // check if it is integer
                if (Number.isInteger(answer)) {
                    console.log(`${answer} is integer.`);
                    finalanswer=answer
                }
                else {
                    console.log(`${answer} is a float value.`);
                    finalanswer=answer.toFixed(2)
                }
            
            } else {
                console.log(`${answer} is not a number`);
            }
        }

        checkNumber(answer)

        inputvar.innerHTML= screen.innerHTML + " = " + finalanswer;
        screen.innerHTML=finalanswer

    }
    catch(err) {
        inputvar.innerHTML= "Syntax ERROR"
        screen.innerHTML= screen.innerHTML
    }



}

clrbtn.addEventListener("click", clear);
function clear() {
inputvar.innerHTML = ""
screen.innerHTML = ""
}

delbtn.addEventListener("click", deleters);
function deleters() {
screen.innerHTML=screen.innerHTML.slice(0, -1)
inputvar.innerHTML="DEL"
}



// input listeners
for(i=1;i<=15;i++){
    
    let b= "button"
    let c= b+i 
        
    document.getElementById(c).addEventListener("click",display)
    function display(){
        screen.innerHTML += document.getElementById(c).innerHTML;
        inputvar.innerHTML= document.getElementById(c).innerHTML;

    }
}


