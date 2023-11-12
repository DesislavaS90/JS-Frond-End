function factorialDivision(num1, num2) {

    let factorial1 = (num1) => {
        if (num1 === 1 || num1 === 0){
            return 1
        }else{
            return num1 * factorial1(num1 - 1)
        }
    }

    let factorial2 = (num2) => {
        if (num2 === 1 || num2 === 0){
            return 1
        }else{
            return num2 * factorial1(num2 - 1)
        }
    }

let result = factorial1(num1) / factorial2(num2);
console.log(result.toFixed(2))
}

factorialDivision(6, 2)