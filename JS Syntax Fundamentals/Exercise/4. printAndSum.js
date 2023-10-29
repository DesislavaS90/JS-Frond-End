function sum(num1, num2){
    let numbers = "";
    let result = 0;

    for(let i=num1; i<=num2; i++){
        result += i;
        numbers += i + " ";
    }

    console.log(numbers)
    console.log(`Sum: ${result}`)
}

sum(5, 10)