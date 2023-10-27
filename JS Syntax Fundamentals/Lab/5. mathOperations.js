function math(firstNum, secondNum, operation){
    let result;
    switch (operation){
        case "+": result = firstNum + secondNum; break;
        case "-": result = firstNum - secondNum; break;
        case "*": result = firstNum * secondNum; break;
        case "/": result = firstNum / secondNum; break;
        case "%": result = firstNum % secondNum; break;
        case "**": result = firstNum ** secondNum; break;
    }

    console.log(result)
}

math(3, 5.5, '*')