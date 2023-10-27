function theatre(day, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
    } else {
        let prices = {
            "Weekday": {
                "child": 12,
                "adult": 18,
                "senior": 12
            },
            "Weekend": {
                "child": 15,
                "adult": 20,
                "senior": 15
            },
            "Holiday": {
                "child": 5,
                "adult": 12,
                "senior": 10
            }
        };

        let ageCategory = "";
        if (age <= 18) {
            ageCategory = "child";
        } else if (age <= 64) {
            ageCategory = "adult";
        } else {
            ageCategory = "senior";
        }

        const result = (prices[day] && prices[day][ageCategory]);
        console.log(`${result}$`);
    }
}



theatre('Holiday', -5)