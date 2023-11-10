function oddEvenSum(number){
    let numArr = number.toString().split('');
    let oddSum = 0;
    let evenSum = 0;

    for (let num of numArr){
        num = Number(num);
        if (num % 2 === 0){
            evenSum += num
        }else{
            oddSum += num
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(3495892137259234)