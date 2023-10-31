function sameNumbers(num){
    let numAsString = num.toString();
    let result = true;
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++){
        if (numAsString[i] !== numAsString[0]){
            result = false;
        }

        sum += parseInt(numAsString[i]);

    }

    console.log(result);
    console.log(sum);
}

sameNumbers(1234);