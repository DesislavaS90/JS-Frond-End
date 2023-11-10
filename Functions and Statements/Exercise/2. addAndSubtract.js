function addAndSubtract(num1, num2, num3){

    let sum = (num1, num2) => num1 + num2;
    let subtract = (sum, num3) => sum - num3;
    
    // Another syntax
    // let sum = (num1, num2) =>{
    //     return num1 + num2
    // }
    // let subtract = (sum, num3) =>{
    //     return sum - num3
    // }


    console.log(subtract(sum(num1, num2), num3));
}

addAndSubtract(42, 58, 100)
