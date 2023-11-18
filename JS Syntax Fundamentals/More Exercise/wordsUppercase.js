function upperCase(words) {   
    let uppercaseWords = words.match(/[A-Za-z]+/g);
    let finalResult = uppercaseWords.join(", ").toUpperCase();
    
    console.log(finalResult); 
}

upperCase('Functions in JS can be nested, i.e. hold other functions');
