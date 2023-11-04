function names(list){
    list.sort((a, b) => {
        return a.localeCompare(b);
    });

    index = 1;

    for (let name of list){
        console.log(`${index}.${name}`)
        index++
    }

}

names(["John", "Bob", "Christina", "Ema"])