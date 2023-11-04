function nthElement(stringArr, number){
    let output = [];

    for (let i = 0; i < stringArr.length; i += number){
        output.push(stringArr[i])
    }

    return output

}

nthElement(['5', '20', '31', '4', '20'], 2)