function checkAndPrintDistanceValidity(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
    }

    const printResult = (point1, point2, isValid) => {
        const validity = isValid ? 'valid' : 'invalid';
        console.log(`{${point1}} to {${point2}} is ${validity}`);
    };

    printResult(`${x1}, ${y1}`, '0, 0', calculateDistance(0, 0, x1, y1));
    printResult(`${x2}, ${y2}`, '0, 0', calculateDistance(0, 0, x2, y2));
    printResult(`${x1}, ${y1}`, `${x2}, ${y2}`, calculateDistance(x1, y1, x2, y2));
}


checkAndPrintDistanceValidity(2, 1, 1, 1);
