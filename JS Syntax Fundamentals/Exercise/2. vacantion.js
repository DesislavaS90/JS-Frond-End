function vacation(people, type, day){
    let price  = 0;
    let info = {
        "Students": {"Friday": 8.45, "Saturday": 9.80, "Sunday": 10.46},
        "Business": {"Friday": 10.90, "Saturday": 15.60, "Sunday": 16},
        "Regular": {"Friday": 15, "Saturday": 20, "Sunday": 22.50}
    };

    price += info[type][day] * people

    if (type === "Students" && people >= 30){
        price *= 0.85
    }else if (type === "Business" && people >= 100){
        price -= 10 * info[type][day]
    }else if (type === "Regular" && (people >= 10 && people <= 20 )){
        price *= 0.95

    }

    console.log(`Total price: ${price.toFixed(2)}`)
}

vacation(100,"Business","Sunday")