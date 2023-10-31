function year(number){
    let output;
    if (number % 4 === 0 || number % 400 === 0 && number % 100 !== 0){
        output = "yes";
    }else{
        output = "no";
    }

    console.log(output);
}

year(2003);