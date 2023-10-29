function age(num){

    if (num < 0){
        console.log("out of bounds");
    } else{
    let ageCategory = "";
        if (num <= 2) {
            ageCategory = "baby";
        } else if (num <= 13) {
            ageCategory = "child";
        } else if (num <= 19){
            ageCategory = "teenager";
        } else if (num <= 65){
            ageCategory = "adult";
        } else if (num >= 66){
            ageCategory = "elder"
        }

        console.log(ageCategory)
    }
}

age('10')