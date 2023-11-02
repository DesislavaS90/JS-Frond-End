function reverse(n, arrayNumbers){
    let newArray = [];

    for (let i = 0; i < n; i++){
        newArray.push(arrayNumbers[i]);
    }

    console.log(newArray.reverse().join(' '));

}

reverse(4, [-1, 20, 99, 5]);