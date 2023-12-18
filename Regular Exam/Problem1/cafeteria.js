function solve (input){

    const baristasNum = Number(input.shift());
    const baristaInfo = {};

    for (let i = 0; i < baristasNum; i++) {
        currentBarista = input.shift().split(' ');

        const baristaName = currentBarista[0];
        const baristaShift = currentBarista[1];
        const baristaSkills = currentBarista[2];

        baristaInfo[baristaName] = {
            shift: baristaShift,
            skills: baristaSkills.slice().split(',')
        };

    }

    let command = input.shift();

    while (command !== 'Closed') {

        let currentLine = command.split(' / ');

        let currentCommand = currentLine[0];

        switch (currentCommand) {
            case 'Prepare':{
                let baristaName = currentLine[1];
                let baristaShift = currentLine[2];
                let baristaSkill = currentLine[3];

                if (baristaInfo[baristaName].shift === baristaShift && baristaInfo[baristaName].skills.includes(baristaSkill)) {

                    console.log(`${baristaName} has prepared a ${baristaSkill} for you!`);
                }else{
                    console.log(`${baristaName} is not available to prepare a ${baristaSkill}.`);
                }

            }   
            break;

            case 'Change Shift':{

                let baristaName = currentLine[1];
                let newShift = currentLine[2];

                baristaInfo[baristaName].shift = newShift;

                console.log(`${baristaName} has updated his shift to: ${newShift}`);
                
            }
            break;

            case 'Learn':{

                let baristaName = currentLine[1];
                let newSkill = currentLine[2];

                if (!baristaInfo[baristaName].skills.includes(newSkill)) {
                    baristaInfo[baristaName].skills.push(newSkill);
                    console.log(`${baristaName} has learned a new coffee type: ${newSkill}.`);
                }else{
                    console.log(`${baristaName} knows how to make ${newSkill}.`);
                }
                
            }
            break;
        
            
        }

        command = input.shift();
        
    }

    for (const key in baristaInfo) {

        console.log(`Barista: ${key}, Shift: ${baristaInfo[key].shift}, Drinks: ${baristaInfo[key].skills.join(', ')}`);
    }

}

solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed'])