function sortingNums(arr){
    arr.sort((a,b) => a - b);
    let arrOutput = [];

    while (arr.length !== 0){
        arrOutput.push(arr.shift(), arr.pop());
    };

    return arrOutput

}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])