function heroInventory(inputArr) {

    let heroes = [];

    [...inputArr].forEach(element => {

        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroes.push({ name, level, items: items.join(', ') });

       
    })

    heroes.sort((a, b) => a.level - b.level).forEach(x => {

        console.log(`Hero: ${x.name}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.items}`);
    })
    
}

heroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])