function cooking(number, ...args){
    let a = parseInt(number);
    
    let result = {
        "chop": (x) => x / 2,
        "dice": (x) => Math.sqrt(x),
        "spice": (x) => x + 1,
        "bake": (x) => x * 3,
        "filled": (x) => x * 0.20
    };

    for (let i = 0; i < args.length; i++){
            a = result[args[i]](a)
            console.log(a);
        }
    };



cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');