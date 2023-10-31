function fruit(type, grams, price) {
    let money = 0;
    let kg = grams / 1000;

    money = kg * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 1563, 2.35);