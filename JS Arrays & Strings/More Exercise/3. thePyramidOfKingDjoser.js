function calculateResources(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let currentBase = base;
    let steps = Math.ceil(base / 2);
    let pyramidHeight = 0;

    for (let i = 1; i <= steps; i++) {
        let stepArea = currentBase * currentBase;
        let stepHeight = increment;

        if (i % 5 === 0 && i !== steps) {
            lapisLazuli += (4 * (currentBase - 1)) * increment;
            stepHeight += increment;
        } else if (i === steps) {
            gold += stepArea * increment;
        } else {
            stone += (currentBase - 2) * (currentBase - 2) * increment;
            marble += (4 * (currentBase - 1)) * increment;
        }

        pyramidHeight += stepHeight;
        currentBase -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}


calculateResources(1, 1);
