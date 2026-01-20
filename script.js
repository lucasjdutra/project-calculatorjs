function calc(operation){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let output;

    switch (operation) {
        case '+': output = num1 + num2;
        break;
        case '-': output = num1 - num2;
        break;
        case '*': output = num1 * num2;
        break;
        case '/': output = num1 / num2;
        break;
    }

    document.getElementById("result").value = output;

    let history = document.getElementById("history");
    let newHistory = "<p>" + num1 + " " + operation + " " + num2 + " = " + output + "</p>";

    history.innerHTML = newHistory + history.innerHTML;

    if(history.children.length > 10) { //busca a quantidade de elementos-filho dentro do elemento history
        history.removeChild(history.childNodes[10]); //remove o elemento-filho correspondente a posição 10 do array
    }
}