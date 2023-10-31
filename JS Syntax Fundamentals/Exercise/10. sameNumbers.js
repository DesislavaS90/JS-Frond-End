function sameNumbers(num){
    let numberAsString = num.toString();
    let result = true;
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++){
        if (numberAsString[i] !== numberAsString[0]){
            result = false;
        }

        sum += parseInt(numberAsString[i]);

    }

    console.log(result);
    console.log(sum);
}

sameNumbers(1234);