function arrayRotation(arr, rNum){

    for(let i = 0; i < rNum; i++){
        let firstEl = arr.shift();
        arr.push(firstEl);

    }

    console.log(arr.join(" "))


}

arrayRotation([2, 4, 15, 31], 5)