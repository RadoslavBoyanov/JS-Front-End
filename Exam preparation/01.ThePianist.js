function pianist(input) {
    let pieces = {};
    const numberOfPieces = input.shift();

    for (let index = 0; index < numberOfPieces; index++) {
        const [piece, composer, key] = input[index].split("|");

        pieces[piece] = { composer: composer, key: key };
    }

    const commandsArray = input.splice(numberOfPieces, input.length);

    for (const command of commandsArray) {
        if (command === "Stop") {
            break;
        }

        const tokens = command.split("|");
        const action = tokens[0];
        switch (action) {
            case "Add":
                const piece = tokens[1];
                const composer = tokens[2];
                const key = tokens[3];

                if (!pieces.hasOwnProperty(piece)) {
                    pieces[piece] = { composer: composer, key: key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case "Remove":
                const song = tokens[1];

                if (!pieces.hasOwnProperty(song)) {
                    console.log(`Invalid operation! ${song} does not exist in the collection.`);
                } else {
                    delete pieces[song];
                    console.log(`Successfully removed ${song}!`);
                }
                break;
            case "ChangeKey":
                const play = tokens[1];
                const newKey = tokens[2];

                if (!pieces.hasOwnProperty(play)) {
                    console.log(`Invalid operation! ${play} does not exist in the collection.`);
                } else {
                    pieces[play].key = newKey;
                    console.log(`Changed the key of ${play} to ${newKey}!`);
                }
                break;
            default:
        }
    }

    const allPieces = Object.keys(pieces);

    for (const key of allPieces) {
        console.log(
            `${key} -> Composer: ${pieces[key].composer}, Key: ${pieces[key].key}`
        );
    }
}

pianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)