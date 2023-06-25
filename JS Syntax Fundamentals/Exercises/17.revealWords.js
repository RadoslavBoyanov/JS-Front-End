function solve(word, string){
    let letters = string.split(" ");
    let words = word.split(", ");

    for (let index = 0; index < words.length; index++) {
       
        for (let i = 0; i < letters.length; i++) {
            if(letters[i].includes('*') && words[index].length == letters[i].length){
                letters[i] = words[index];
                break;
            }
        }
    }

    console.log(letters.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')