function radioCrystals(params) {
    let [target, ...chunks] = params;

    let operations = {
        "cut": n => n / 4,
        "lap": n => n * 0.8,
        "grind": n => n - 20,
        "Etch": n => n - 2,
        "X-ray": n => n + 1,
        "transportAndWash": n => Math.floor(n)
    }
    
}

radioCrystals([1000, 4000, 8100])