function cityInfo(params) {

    for ([key, value] of Object.entries(params)){
        console.log(`${key} -> ${value}`);
    }
    
}



cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})