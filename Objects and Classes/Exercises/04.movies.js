function movieInfo(input) {

    let movies = [];

    for (const line of input) {
        let tokens = line.split(' ');
        if (line.includes('addMovie')) {
           let movieName = tokens.slice(1).join(' ');
            addMovie(movieName);
        }
        else if (line.includes('directedBy')){
            let index = tokens.indexOf('directedBy');
    
            let movieName = tokens.slice(0, index).join(' ');
            let director = tokens.slice(index + 1).join(' ');
            addDirector(movieName, director);
        }
        else{
            let splitIndex = tokens.indexOf('onDate');
            let nameOfMovie = tokens.slice(0, splitIndex).join(' ');
            let date = tokens.slice(splitIndex + 1).join(' ');
            addDate(nameOfMovie, date);
        }
    }

    for (const movie of movies) {
        if(movie.hasOwnProperty('name') && movie.hasOwnProperty('date') && movie.hasOwnProperty('director')){
            console.log(JSON.stringify(movie));
        }
    }

    function addMovie(name){
        movies.push({ name });
    }

    function addDirector(name, director){
        let movie = movies.find((m) => m.name === name)
        if(movie){
            movie.director = director;
        }
    }

    function addDate(name, date){
        let movie = movies.find((m) => m.name === name)
        if(movie){
            movie.date = date;
        }
    }
    
}

movieInfo(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])