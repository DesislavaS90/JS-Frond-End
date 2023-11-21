function phoneBook(input) {

    const phoneBook = {};

    for (let i = 0; i < input.length; i++) {
        let [name, number] = input[i].split(' ');

        phoneBook[name] = number;
    }

    let result = Object.entries(phoneBook).map(([key, value]) => `${key} -> ${value}`).join('\n');

    console.log(result);
    
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])