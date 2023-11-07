function revealWords(words, text){
    let wordsArr = words.split(" ")
    let textArr = text.split(" ")
    

    for (let i = 0; i < wordsArr.length; i++){
         
        for (let t = 0; t < textArr.length; t++){

            if (wordsArr[i].length === textArr[t].length && textArr[t].startsWith("*")){
                textArr[t].replace(wordsArr[i])

            }
        }
    }

    console.log(textArr.join(" "))

    
}

revealWords('great','softuni is ***** place for learning new programming languages')