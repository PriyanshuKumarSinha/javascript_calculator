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

var calcKeys= [7,8,9,"+",4,5,6,'-',1,2,3,'*',0,'.','/','=']

for (let i=0; i < calcKeys.length; i++ ){
    createButtons('button1',calcKeys[i]);
}

function createButtons(className,value = ''){
    var button = document.createElement('button');

    button.setAttribute('class',`btn btn-secondary ${className}`);
    button.setAttribute('id', `${value}`);
    button.setAttribute('onclick','fun(this.id)');
    
    button.innerHTML = `<b> .<span>${value}</span>. </b>`;

    if (value == '.' || value == '-' ){
        button.innerHTML = `<b> _<span>${value}</span>_ </b>`;
    }
    
    var calcBody = document.querySelector('.calc-operators');
    calcBody.appendChild(button);

}

function clearButton(){
    var button = document.createElement('button');

    button.setAttribute('class',`btn btn-danger btn-lg`);
    button.setAttribute('onclick','clearScreen()');
    button.style.margin = '10px';
    
    button.innerHTML = `Clear`;
   
    var calcBody = document.querySelector('.calc-operators');
    calcBody.appendChild(button);
}
clearButton();

var screen = document.querySelector('.calc-screen');

function fun(buttonValue){
    if (buttonValue === '='){
        screen.innerHTML = eval(screen.innerHTML)
        screen.textContent.bold;
    }
    else{
        screen.innerHTML += buttonValue;
    }
}

function clearScreen(){
    screen.innerHTML = ""
}