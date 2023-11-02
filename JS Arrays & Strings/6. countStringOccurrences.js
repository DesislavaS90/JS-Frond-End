function occurances(text, word){
    let counter = 0;
    for (let t of text.split(" ")){
        if (t === word){
            counter++
        }

    }

    console.log(counter)
}

occurances('softuni is great place for learning new programming languages','softuni')