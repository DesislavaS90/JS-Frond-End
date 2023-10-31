function sumDigits(num){
    let num2 = num.toString()
    let result  = 0;

    for(let i=0; i<num2.length; i++){
        result += parseInt(num2[i]);
    }

    console.log(result);
}

sumDigits(97561);