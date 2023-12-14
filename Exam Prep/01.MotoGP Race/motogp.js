function solve(input) {

    const ridersNumber = Number(input.shift());

    const ridersInfo = {};

    for (let i = 0; i < ridersNumber; i++) {

        const [name, fuel, position] = input.shift().split('|');

        ridersInfo[name] = {

            fuel: Number(fuel),
            position: Number(position)
            
        }
    }


    let command = input.shift();

    while (command !== 'Finish') {

        const currentLine = command.split(' - ');

        const currentCommand = currentLine.shift();

        switch (currentCommand) {
            case 'StopForFuel':{
                const [name, minFuel, changedPosition] = currentLine;

                if (ridersInfo[name].fuel < Number(minFuel)) {
                    ridersInfo[name].position = changedPosition;
                    console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                    
                }else{
                    console.log(`${name} does not need to stop for fuel!`);
                }

            }
            break;

            case 'Overtaking':{
                const [firstRider, secondRider] = currentLine;

                if (ridersInfo[firstRider].position < ridersInfo[secondRider].position) {

                    const temp = ridersInfo[firstRider].position;

                    ridersInfo[firstRider].position = ridersInfo[secondRider].position;
                    ridersInfo[secondRider].position = temp;

                    console.log(`${firstRider} overtook ${secondRider}!`);
                }
                
                
            }
            break;

            case 'EngineFail':{

                const [riderName, lapsLeft] = currentLine;

                delete ridersInfo[riderName];

                console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                
            }
        }

        command = input.shift();
        
    }

    for (const rider in ridersInfo) {
        console.log(`${rider}`);
        console.log(`  Final position: ${ridersInfo[rider].position}`);
    }

}

solve(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])