function spiceMining(startingYield) {
    let days = 0;
    let totalSpice = 0;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalSpice -= 26; 
        startingYield -= 10;
        days++;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    } else {
        totalSpice = 0;
    }

    console.log(days);
    console.log(totalSpice);
}


spiceMining(111);
