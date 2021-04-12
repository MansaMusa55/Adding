// This will do math with numbers
function doMath(){
    let num1 = document.getElementById("numOne").value;
    let num2 = document.getElementById("numTwo").value;
    addNumbers(num1, num2);
    subNumbers(num1, num2);
    mulNumbers(num1, num2);
    divNumbers(num1, num2);
}

// add two numbers together
function addNumbers(anyNumber1, anyNumber2){
    let result = parseInt(anyNumber1) + parseInt(anyNumber2);
    let msg = `Sum = ${result}`;
    document.getElementById("addResult").innerHTML = msg;
}


//subtracts two numbers
function subNumbers(anyNumber1,anyNumber2){
    let result = parseInt(anyNumber1) - parseInt(anyNumber2);
    let msg = `Difference = ${result}`;
    document.getElementById("subResult").innerHTML = msg;
}

//multiply two numbers
function mulNumbers(anyNumber1,anyNumber2){
    let result = parseInt(anyNumber1) * parseInt(anyNumber2);
    let msg = `Product = ${result}`;
    document.getElementById("mulResult").innerHTML = msg;
}

//divide two numbers
function divNumbers(anyNumber1,anyNumber2){
    let result = parseInt(anyNumber1) / parseInt(anyNumber2);
    let msg = `Quotient = ${result}`;
    document.getElementById("divResult").innerHTML = msg;
}