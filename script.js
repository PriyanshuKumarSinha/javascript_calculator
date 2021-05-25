function manageMargin(){
    var div = document.querySelector('.calculator-body');
    var divHeight = 500;
    div.style.marginTop = (window.innerHeight - divHeight) / 2  + 'px';
}


window.addEventListener('resize', 
    function(){
        manageMargin();
    }
)

var calcKeys= ['=','π','^',7,8,9,"+",'sin',4,5,6,'-','cos',1,2,3,'*','tan',0,'.','/', '(','log',')','√']



function createButtons(className,value = '', func = 'fun(this.id)' ){
    var button = document.createElement('button');

    button.setAttribute('class',`btn btn-lg ${className}`);
    button.setAttribute('id', `${value}`);
    button.setAttribute('onclick',func);
    
    button.innerHTML = `<b> <span>${value}</span> </b>`;
    
    var calcBody = document.querySelector('.calc-operators');
    calcBody.appendChild(button);

}



function clearRecent(){
    screen.innerText = screen.innerText.slice(0, screen.innerText.length-1) 
}
var screen = document.querySelector('.calc-screen');

var previousOperator;
function fun(buttonValue){

    if (buttonValue === '='){
        if(isFloat(eval(screen.innerHTML))){
            screen.innerHTML = eval(screen.innerHTML).toFixed(2)
        }
        else{
            screen.innerHTML = eval(screen.innerHTML)
        }
        screen.textContent.bold;
        previousOperator = "=";
    }
    else if(buttonValue === '√'){
        screen.innerHTML = Math.sqrt(screen.innerHTML).toFixed(8)
    }
    else if(Number.isInteger(parseInt(buttonValue)) && (previousOperator === '=' || previousOperator === '√') ){
        clearScreen();
        screen.innerHTML += buttonValue;

    }
    else{
        previousOperator = "";
        screen.innerHTML += buttonValue;
    }
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function clearScreen(){
    screen.innerHTML = ""
}

manageMargin();

var otherButtons = {
    'C' : 'clearScreen()',
    'CE' : 'clearRecent()',
}

var obKeys = Object.keys(otherButtons)

for (let i=0; i < obKeys.length; i++ ){
    createButtons('button1',obKeys[i],otherButtons[obKeys[i]]);
}


for (let i=0; i < calcKeys.length; i++ ){
    createButtons('button1',calcKeys[i]);
}
