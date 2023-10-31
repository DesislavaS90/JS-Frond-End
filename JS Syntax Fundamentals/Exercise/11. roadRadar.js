function speedLimit(speed, area){
    const restrictions = {
       "motorway": 130,
       "interstate": 90,
       "city": 50,
       "residential": 20
    };

    if (restrictions[area] < speed){
        let status = ""
        let diff = Math.abs(speed - restrictions[area])

        if ( diff <= 20){
            status = "speeding"
        }else if (diff <= 40){
            status = "excessive speeding"
        }else if (diff > 40){
            status = "reckless driving"
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${restrictions[area]} - ${status}`);
    } else{
        console.log(`Driving ${speed} km/h in a ${restrictions[area]} zone`)
    }

}

speedLimit(120, 'interstate')