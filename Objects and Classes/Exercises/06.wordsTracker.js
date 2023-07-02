function findWords(input) {
    let wordsTofind = input.shift().split(' ');
    let words = {};
    for (const word of wordsTofind) {
        words[word] = 0;
    }

    for (const line of input) {
        let word = line.split(', ');

        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    }

    let sortedWords = Object.entries(words).sort((wordA, wordB) => {
        let [_nameA, countA] = wordA;
        let [_nameB, countB] = wordB;

        return countB - countA;
    })

    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

findWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])

findWords([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])