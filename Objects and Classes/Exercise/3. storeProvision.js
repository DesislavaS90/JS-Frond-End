function storeProvision(currentStock, orderedStock) {
    const stock = {};

    
    for (let i = 0; i < currentStock.length; i += 2) {
        stock[currentStock[i]] = Number(currentStock[i + 1]);
    }

    
    for (let i = 0; i < orderedStock.length; i += 2) {
        const product = orderedStock[i];
        const quantity = Number(orderedStock[i + 1]);

        if (stock.hasOwnProperty(product)) {
            stock[product] += quantity;
        } else {
            stock[product] = quantity;
        }
    }

    
    Object.entries(stock).forEach(([product, quantity]) => {
        console.log(`${product} -> ${quantity}`);
    });
}

storeProvision(
    [
        'Chips', '5', 'Coca Cola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

