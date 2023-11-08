function calculator(num1, num2, operator){

    let operation = {
        'multiply': (x, y) => x * y,
        'divide': (x, y) => x / y,
        'add': (x, y) => x + y,
        'subtract': (x, y) => x - y   
    }

    let result = operation[operator](num1, num2)

    console.log(result)

}

calculator(5, 5, 'multiply')