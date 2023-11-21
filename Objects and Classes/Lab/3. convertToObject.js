function convertToObject(jasonFormat) {
    let obj = JSON.parse(jasonFormat);

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')