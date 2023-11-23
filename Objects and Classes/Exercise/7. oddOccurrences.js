function oddOccurrences(string) {

    let stringAsArray = string.split(' ');

    let result = new Map();

    for (let i = 0; i < stringAsArray.length; i++){
        let currentWord = stringAsArray[i].toLowerCase();
        
        if (result.has(currentWord)){
            result.set(currentWord, result.get(currentWord) + 1);
        }else{
            result.set(currentWord, 1);
        }
        
    }

    console.log(Array.from(result.keys()).filter(x => result.get(x) % 2 !== 0).join(' '));
        
    
    
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')