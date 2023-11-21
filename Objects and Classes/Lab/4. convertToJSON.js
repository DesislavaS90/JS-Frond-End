function convertToJSON(firstName, lastName, hairColor){
    let name = firstName
    let person = {
        name,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(person));
    
}

convertToJSON('George', 'Jones', 'Brown')