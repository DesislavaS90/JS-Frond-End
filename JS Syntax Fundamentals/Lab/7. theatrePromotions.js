function theatre(day, age){
    let result = 0
    
    if (age < 0 || age > 122){
        console.log("Error!")
    }else{
        if (day === "Weekday"){
            if (age <= 18){
                result += 12

            }else if (age <= 64){
                result += 18

            }else if (age <= 122){
                result += 12
            }
        } else if (day === "Weekend"){
            if (age <= 18){
                result += 15
                
            }else if (age <= 64){
                result += 20

            }else if (age <= 122){
                result += 15
            }
                
            }else if (day === "Holiday"){
                if (age <= 18){
                    result += 5
                    
                }else if (age <= 64){
                    result += 12
    
                }else if (age <= 122){
                    result += 10
                }
                
            }

        console.log(`${result}$`)

    }
}

theatre('Holiday', 15)