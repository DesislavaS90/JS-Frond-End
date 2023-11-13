function carWash(commandArr) {

    let beCleaned = 0;

    let cleanCommand = {
        'soap': () => beCleaned += 10,
        'water': () => beCleaned += beCleaned * 0.20,
        'vacuum cleaner': () => beCleaned += beCleaned * 0.25,
        'mud': () => beCleaned -= beCleaned * 0.10
    }

    for (let i = 0; i < commandArr.length; i++){
        beCleaned = cleanCommand[commandArr[i]](beCleaned);
    }

    console.log(`The car is ${beCleaned.toFixed(2)}% clean.`);
    
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])