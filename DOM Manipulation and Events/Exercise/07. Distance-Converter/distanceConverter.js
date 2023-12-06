function attachEventsListeners() {
    let button = document.getElementById('convert');

    let inputDistance = document.getElementById('inputDistance');
    let outputDistance = document.getElementById('outputDistance');

    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');

    button.addEventListener('click', convert);

    function convert(e) {
        let distance = Number(inputDistance.value);
        let inputUnit = inputUnits.value;
        let outputUnit = outputUnits.value;

        let result = convertDistance(distance, inputUnit, outputUnit);

        outputDistance.value = result;
    }

    function convertDistance(value, inputUnit, outputUnit) {
       
        const conversionFactors = {
            'km': 1000,
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'mi': 1609.34,
            'yrd': 0.9144,
            'ft': 0.3048,
            'in': 0.0254,
        };

        
        return (value * conversionFactors[inputUnit]) / conversionFactors[outputUnit];
    }
}





       

        

 