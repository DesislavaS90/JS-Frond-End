function singCheck(num1, num2, num3){
    let result = "";
    let negarivesCount = (num1 < 0 ? 1 : 0) + (num2 < 0 ? 1 : 0) + (num3 < 0 ? 1 : 0);

    if (negarivesCount % 2 === 0){
        result = "Positive"
    }else{
        result = "Negative"
    }

    console.log(result)
}



singCheck( -6, -12, 14)