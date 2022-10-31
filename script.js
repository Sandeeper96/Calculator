let calValue = '';
let calculatorResult = document.getElementById('calculatorResult');

let bgButton = document.querySelectorAll('button');


Array.from(bgButton).forEach((calButton)=>{
 

    calButton.addEventListener("click", ()=>{
       

        if(calButton.innerHTML == '='){
            calValue = eval(calValue);
            calculatorResult.value = calValue;
        }

        else if(calButton.innerHTML == 'CE'){
            calValue = '';
            calculatorResult.value = calValue;
        }
        else if(calButton.innerHTML == 'DEL'){
            calValue = calculatorResult.value.slice(0,-1);
            calculatorResult.value = calValue;
        }
        else{
        calValue = calValue + calButton.innerHTML;
        calculatorResult.value = calValue;
        }
    })
});