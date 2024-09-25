let operator
function assignOP(OP){
operator =OP;
}
function calculate(operation) {
    // using float for more accuracy in values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;


    switch (operation) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide': result = num1 / num2; break;
        default: result = "invalid operators";
    }

    // Displaying the result
    if(operation === 'divide') {
        document.getElementById('result').textContent = "Result: " + result.toFixed(4);//for more accurate values
    }
    else{
        document.getElementById('result').textContent = "Result: " + result.toFixed(0);
    }

}
    

