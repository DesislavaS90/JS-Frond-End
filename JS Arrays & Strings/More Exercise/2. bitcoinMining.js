function bitcoinMining(input) {
    let days = 0;
    let totalGoldInLevs = 0;
    let bitcoinPrice = 11949.16;
    let mybitcoins = 0;

    for (let day = 0; day < input.length; day++) {
        let minedGold = input[day];

        if ((day + 1) % 3 === 0) {
            minedGold *= 0.70;
            totalGoldInLevs += minedGold * 67.51;
            
        } else {
            totalGoldInLevs += minedGold * 67.51; 
        }

        while (totalGoldInLevs >= bitcoinPrice) {
            totalGoldInLevs -= bitcoinPrice;
            mybitcoins++;
            if (mybitcoins === 1) {
                days = day + 1;
            }
        }
    }


    console.log(`Bought bitcoins: ${mybitcoins}`);
    if (mybitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${days}`);
    }
    console.log(`Left money: ${totalGoldInLevs.toFixed(2)} lv.`);
    
}

bitcoinMining([100, 200, 300]);