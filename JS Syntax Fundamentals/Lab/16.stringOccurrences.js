function solve(string, serachedWord){
    let words = string.split(' ');
    let counter = 0;
    for (let word of words) {
        if(word === serachedWord){
            counter++;
        }
    }

    console.log(counter);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');