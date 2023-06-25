function solve(word, text){
    let array = text.split(" ");
    let found = false;

    for (let index = 0; index < array.length; index++) {
        if(word.toUpperCase() === array[index].toUpperCase()){
            console.log(`${word}`)
            found = true;
        }
        
    }

    if(found == false){
        console.log(`${word} not found!`)
    }
}

solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language')