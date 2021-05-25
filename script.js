function manageMargin(){
    var div = document.querySelector('.calculator-body');
    var divHeight = 500;
    div.style.marginTop = (window.innerHeight - divHeight) / 2  + 'px';
}

manageMargin();

window.addEventListener('resize', 
    function(){
        manageMargin();
    }
)

var calcKeys= [7,8,9,"+",4,5,6,'-',1,2,3,'*',0,'.','/','=', '(',')']

for (let i=0; i < calcKeys.length; i++ ){
    createButtons('button1',calcKeys[i]);
}

createButtons('button1','√')
function createButtons(className,value = '', func = 'fun(this.id)' ){
    var button = document.createElement('button');

    button.setAttribute('class',`btn btn-secondary ${className}`);
    button.setAttribute('id', `${value}`);
    button.setAttribute('onclick',func);
    
    button.innerHTML = `<b> .<span>${value}</span>. </b>`;

    if (value == '.' || value == '-' ){
        button.innerHTML = `<b> _<span>${value}</span>_ </b>`;
    }
    
    var calcBody = document.querySelector('.calc-operators');
    calcBody.appendChild(button);

}
function clearButton(){
    var button = document.createElement('button');

    button.setAttribute('class',`btn btn-danger `);
    button.setAttribute('onclick','clearScreen()');
    button.style.margin = '10px';
    
    button.innerHTML = `Clear`;
   
    var calcBody = document.querySelector('.calc-operators');
    calcBody.appendChild(button);
}
clearButton();

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
        previousOperator = "";
        screen.innerHTML += 'Math.sqrt('
    }
    else if(Number.isInteger(parseInt(buttonValue)) && previousOperator === '='){
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