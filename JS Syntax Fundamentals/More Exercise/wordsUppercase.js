function upperCase(words){   
    
    let uppercase = words.replace(/[^A-Za-z\s]/g, '');
    let spltArray = uppercase.split(/\s+/);
    let finalResult = spltArray.join(", ")
    
    console.log(finalResult.toUpperCase()); 
    }

upperCase("Functions in JS can be nested, i.e. hold other functions");
