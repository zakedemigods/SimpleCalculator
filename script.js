const calculator = document.querySelector('.calculator');
const values = document.querySelector('#values')
const result = document.querySelector('#result')

calculator.addEventListener('click', (e)=> {
    if(!e.target.classList.contains('calculator_button'))
    return;

    const value = e.target.innerText;

    switch(value){
        case 'C' :
            values.innerText= '';
            result.innerText= '0';
            break;
        case '↩':
            if (values.innerText){
                values.innerText = values.innerText.slice(0, -1);
            }
            break;
        case 'x':
            values.innerText += '*';
            break;
        case '÷':
            values.innerText += '/';
            break;
        case '=':
            try{
            if(values.innerText.search(/[^0-9*/+-.()]/im) != -1) return;
            result.innerText = eval(values.innerText).toFixed();
            }catch{
                if (values.innerText === ''){
                    result.innerText = 'Empty'
                    setTimeout(clearDisplay, 1000);
                } else {
                    result.innerText = 'Invalid value';
                    setTimeout(clearDisplay, 1000);
                }
            }
            break;
        default:
            if (result.innerText != 'Invalid value' && result.innerText == '0') 
            {
                values.innerText += value;
            } else {
                values.innerText += value;
            }
    }
})

function clearDisplay(){
    values.innerText = '';
    result.innerText = '0';
}

const changeColor = document.querySelector('.change_color');
const area = document.querySelector('.calculator_input-area');
const button = document.querySelector('.calculator_button');
const rightBtns = document.querySelector('.calculator_button-right');
const topBtns = document.querySelector('.calculator_button-top');

changeColor.addEventListener('click', ()=>{
    changeColor.classList.toggle('change_color--light');
    area.classList.toggle('calculator_input-area--light');
    calculator.classList.toggle('calculator--light');

    for (let i = 0; i < button.length; i++) {
        button[i].classList.toggle('calculator_button--light')
    }

    for (let i = 0; i < rightBtns.length; i++) {
        button[i].classList.toggle('calculator_button-right--light')
    }

    for (let i = 0; i < topBtns.length; i++) {
        button[i].classList.toggle('calculator_button-top--light')
    }

    values.classList.toggle('calculator_values--light');
    result.classList.toggle('calculator_result--light');
})
