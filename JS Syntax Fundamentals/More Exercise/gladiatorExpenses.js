function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0;
    let shieldBroken = 0;
    

    for (let i = 1; i <= lostFights; i++){
        if (i % 2 === 0){
            expenses += helmetPrice;
        }
        if (i % 3 === 0){
            expenses += swordPrice;
        }
        if (i % 6 === 0) {
            expenses += shieldPrice;
            shieldBroken += 1;
        } 
        if (shieldBroken % 2 === 0 && i % 6 === 0) {
            expenses += armorPrice;
        }
    }


    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiator(23, 12.5, 21.5, 40, 200 )