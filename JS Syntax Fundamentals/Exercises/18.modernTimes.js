function solve(string){
    let words = string.split(" ");
    const regexPattern = new RegExp('(#[A-Za-z]+)');

    for (let index = 0; index < words.length; index++) {
        if(regexPattern.test(words[index]) && words[index].includes('#') && words[index].length > 1){
            let rightWord = words[index].slice(1);
            console.log(rightWord)
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')