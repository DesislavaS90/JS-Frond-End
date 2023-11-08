function grade(grade){

    let result = `(${grade.toFixed(2)})`;
    let status = "";
    if (grade < 3){
        status += "Fail"
        result = "(2)"
    }else if (grade < 3.5){
        status += "Poor"
    }else if (grade < 4.5){
        status += "Good"
    }else if (grade < 5.5){
        status += "Very good"
    }else{
        status += "Excellent"
    }

    console.log(status + " " + result);
}

grade(3.33)