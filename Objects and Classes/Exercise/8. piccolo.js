function parkingInfo(carPlate) {

    let parking = [];

    for (let i = 0; i < carPlate.length; i++){

        let [direction, carNumber] = carPlate[i].split(', ');

        if (direction === 'IN'){

            parking.push(carNumber);
        }else{

            let index = parking.indexOf(carNumber);
            parking.splice(index, 1);
        }
    }

    if(parking.length !== 0){
        console.log(parking.sort((a, b) => a.localeCompare(b)).join('\n'));
    }else{
        console.log('Parking Lot is Empty');
    }


    
}

// parkingInfo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU'])

parkingInfo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])