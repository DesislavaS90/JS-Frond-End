function matrix(n) {
    let result = ""

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            result += n + " "
        }
        result += "\n"
    }

    console.log(result)
    
}


matrix(7)