function movies(inputArr) {

    let moviesInfo = [];

    inputArr.forEach(element => {

        if (element.includes('addMovie')) {
            let [command, name] = element.split('addMovie ');
            moviesInfo.push({ "name": name});

        } else if (element.includes('directedBy')) {
            let [name, director] = element.split(' directedBy ');
            let movie = moviesInfo.find(x => x.name === name);
            if (movie) {
                movie.director = director;
            }

        } else if (element.includes('onDate')) {
            let [name, date] = element.split(' onDate ');
            let movie = moviesInfo.find(x => x.name === name);
            if (movie) {
                movie.date = date;
            }
            
        
        }
    })

    moviesInfo.forEach(x => {

        if (x.director && x.date && x.name ) {
            console.log(JSON.stringify(x));             
        }
        
    })

}
    


movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])