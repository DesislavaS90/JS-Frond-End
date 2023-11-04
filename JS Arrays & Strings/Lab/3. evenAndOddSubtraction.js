function solve(array){
    let odd = 0;
    let even = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            even += Number(array[i]);
        }else{
            odd += Number(array[i]);
        }

    }

    console.log(even - odd)
    
}

solve([3, 5, 7, 9])