function validation(coords) {
    let x1 = coords[0];
    let y1 = coords[1];
    let x2 = coords[2];
    let y2 = coords[3];

    let isValidDistance = (x1, y1, x2, y2) => Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));

    console.log(isValidDistance(x1, y1, 0, 0) ? valid = `{${x1}, ${y1}} to {${0}, ${0}} is valid` : invalid = `{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    console.log(isValidDistance(x2, y2, 0, 0) ? valid = `{${x2}, ${y2}} to {${0}, ${0}} is valid` : invalid = `{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    console.log(isValidDistance(x1, y1, x2, y2) ? valid = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : invalid = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

validation([2, 1, 1, 1]);
