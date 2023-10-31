function cooking(number, ...args){
    let a = parseInt(number);
    
    let result = {
        "chop": (x) => x / 2,
        "dice": (x) => Math.sqrt(x),
        "spice": (x) => x + 1,
        "bake": (x) => x * 3,
        "fillet": (x) => x * 0.80
    };

    for (let i = 0; i < args.length; i++){
            a = result[args[i]](a)
            a = Number.isInteger(a) ? a : parseFloat(a.toFixed(1));
            console.log(a);
        }
    };



cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');