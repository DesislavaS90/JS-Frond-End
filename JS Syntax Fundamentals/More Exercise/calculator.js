function calculator(num1, operator, num2){
    let calculation = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "/": (x, y) => x / y,
        "*": (x, y) => x * y
    }

    let result = calculation[operator](num1, num2)
    console.log(result.toFixed(2))
}

calculator(25.5, '-', 3)