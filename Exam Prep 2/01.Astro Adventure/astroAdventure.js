function solve(input){

    const astronautsNum = Number(input.shift());

    const astronautsInfo = {};

    for(let i = 0; i < astronautsNum; i++){

        let [name, oxygen, energy] = input.shift().split(' ');

        astronautsInfo[name] = {
            oxygen: Number(oxygen),
            energy: Number(energy)
        };
    }

    currentLine = input.shift();

    while(currentLine !== 'End'){

        const command = currentLine.split(' - ');

        const currentCommand = command[0];

        switch(currentCommand){
            case 'Explore':{

                const name = command[1];
                const energy = Number(command[2]);

                if(astronautsInfo[name].energy >= energy){
                    let energyLeft = astronautsInfo[name].energy - energy;
                    astronautsInfo[name].energy = energyLeft;
                    console.log(`${name} has successfully explored a new area and now has ${energyLeft} energy!`);
                }else{
                    console.log(`${name} does not have enough energy to explore!`);
                }
            }
            break;

            case 'Refuel':{

                const name = command[1];
                const energy = Number(command[2]);

                let totalEnergy = astronautsInfo[name].energy + energy;

                if(totalEnergy < 200){

                    astronautsInfo[name].energy = totalEnergy;
                    console.log(`${name} refueled their energy by ${energy}!`);
                }else{
                    let recovered = 200 - astronautsInfo[name].energy;
                    astronautsInfo[name].energy = 200;
                    console.log(`${name} refueled their energy by ${recovered}!`);
                }

                
            }
            break;

            case 'Breathe':{

                const name = command[1];
                const oxygen = Number(command[2]);

                let totalOxygen = astronautsInfo[name].oxygen + oxygen;

                if(totalOxygen < 100){

                    astronautsInfo[name].oxygen = totalOxygen;
                    console.log(`${name} took a breath and recovered ${oxygen} oxygen!`);
                }else{
                    let recovered = 100 - astronautsInfo[name].oxygen
                    astronautsInfo[name].oxygen = 100;
                    console.log(`${name} took a breath and recovered ${recovered} oxygen!`);
                }
               
                
            }
        }

        currentLine = input.shift();
    }

    for(let [key, value] of Object.entries(astronautsInfo)){
        console.log(`Astronaut: ${key}, Oxygen: ${value.oxygen}, Energy: ${value.energy}`);
    }

}

solve(['4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End'])