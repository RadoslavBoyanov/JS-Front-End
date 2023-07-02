function findOccurrences(input) {
    let occurrences = {};
    let words = input.split(' ');
    for (let index = 0; index < words.length; index++) {
        let word = words[index].toLowerCase();;
       
        if(!occurrences.hasOwnProperty(word)){
            occurrences[word] = 1;
        }
        else{
            occurrences[word] += 1;
        }
    }

    let word = Object.keys(occurrences).filter((key) => occurrences[key]%2!== 0);

    console.log(word.join(' '));
}
findOccurrences('Cake IS SWEET is Soft CAKE sweet Food')

findOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')