function addressBook(input) {

    const addressBook = {};

    for (const element of input) {

        const [name, address] = element.split(':');

        addressBook[name] = address;
        
    }

    let sorted = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    console.log(sorted.map(x => `${x[0]} -> ${x[1]}`).join('\n'));
    
    
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])