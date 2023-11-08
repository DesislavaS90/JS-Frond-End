function subString(word, text){
    lowerCaseText = text.toLowerCase().split(" ")
     
    if (lowerCaseText.includes(word)){
        console.log(word)
    }else{
        console.log(`${word} not found!`)
    }

}

subString('python','JavaScript is the best programming language')