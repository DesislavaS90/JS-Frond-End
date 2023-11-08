function ordersCalculation(product, qty){
    let priceList = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }

    let result = priceList[product] * qty;

    console.log(result.toFixed(2))
}

ordersCalculation("coffee", 2)