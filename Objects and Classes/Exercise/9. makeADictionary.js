function makeADictionary(strJSON) {

    const dictionary = {};

    for (const obj of strJSON) {

        const objParsed = JSON.parse(obj);
        
        for (const term in objParsed) {
            dictionary[term] = objParsed[term];  
        }
        
    }

    let sorted = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

    console.log(sorted.map(x => `Term: ${x[0]} => Definition: ${x[1]}`).join('\n'));


    
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])