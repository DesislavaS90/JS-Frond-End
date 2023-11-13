function numberModification(num){
    let numAsArr = num.toString().split("");
    

    for (let number of numAsArr){
        let sum = numAsArr.reduce((acc, digit) => acc + Number(digit), 0);
        let average = sum / numAsArr.length;

        if (average >= 5){
            break;
        }
        numAsArr.push(9);
    }

    

    console.log(numAsArr.join(""));
}

numberModification(5835)