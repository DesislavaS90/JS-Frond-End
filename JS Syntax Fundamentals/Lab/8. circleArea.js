function area(input){
    if (typeof input !== "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }else{
        let result = Math.PI * input * input
        console.log(result.toFixed(2))
    }
}

area("name")