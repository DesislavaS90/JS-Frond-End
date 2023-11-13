function numberModification(num){
    let numAsArr = num.toString().split("");
    let sum = numAsArr.reduce(acc, digit)
    

    for (let number of numAsArr){
        sum += Number(number);
        let average = sum / numAsArr.length;

        if (average >= 5){
            break;
        }
        numAsArr.push(9);
    }

    

    console.log(numAsArr.join(""));
}

numberModification(101)