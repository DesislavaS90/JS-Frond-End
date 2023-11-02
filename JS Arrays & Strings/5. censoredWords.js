function solve(text, word){
    let result = text.replace(new RegExp(word, "g"), "*".repeat(word.length))

    console.log(result)

}

solve('Find the hidden word', 'hidden')