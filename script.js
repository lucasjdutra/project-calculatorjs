function calc(operation){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let output;

    switch (operation) {
        case 'sum': output = num1 + num2;
        break;
        case 'sub': output = num1 - num2;
        break;
        case 'multi': output = num1 * num2;
        break;
        case 'divi': output = num1 / num2;
        break;
    }

    document.getElementById("result").value = output;
}