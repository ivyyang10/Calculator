let result;
let previous =null;
let operator =null;
let clicked = false;

function operatorFunction(){
    let answer;
    const current=parseNumber(result.value);
    previous=parseNumber(previous);

    if(operator=='+'){
      answer=previous+current
     

    }else if(operator=="-"){
        answer=previous-current
       

    }else if(operator=="*"){
        answer=previous*current
       

    }else if(operator=="/"){
        answer=previous/current
       
    }
result.value=answer;
operator = null;

}


function parseNumber(num){
    return num.includes('.') ? parseFloat(num) : parseInt(num);
}

function clickOperator(event){
    operator = event.target.value;
    previous = result.value;
    clicked=true;
}

function clickNumber(event) {
    const val= event.target.value;

    if(clicked){
        result.value=val;
        clicked=false;
    }else{
        result.value== 0 ? result.value = val : result.value+=val;
    }
}

function backspace(){
   result.value=result.value.slice(0,-1)
}


function clear() {
    result.value = 0;
}

document.addEventListener('DOMContentLoaded', ()=>{
    result=document.getElementById('result');

    const numbers=document.querySelectorAll('.number');
    numbers.forEach((number)=> {
        number.addEventListener('click', (event)=> {
            clickNumber(event)
        })
    })

   const operators=document.querySelectorAll('.operator');
   operators.forEach((operator) => {
     operator.addEventListener('click', (event) =>{
        clickOperator(event)
     })
   })

   const decimal = document.querySelector('.decimal');
   decimal.addEventListener('click', (event) =>{
    clickNumber(event)
   })

   const deletes= document.querySelector('.delete');
   deletes.addEventListener('click', () =>{
       backspace()
   })

   const allClear= document.querySelector('.clear');
   allClear.addEventListener('click', () =>{
    clear();
   })

   const equal=document.querySelector('.equal');
   equal.addEventListener('click', (event) =>{
    operatorFunction(event);
   } )
})