function hashTag(text){
    let regex = /#[A-Za-z]+/gm

    let match =  text.match(regex)

    for(m of match){
        console.log(m.replace("#", ''))
    }

// console.log(match.join("\n").replace("#", ""))
}

hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')