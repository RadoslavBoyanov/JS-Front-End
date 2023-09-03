function horseRacing(input) {
    let racingPositions = [];

    const currentPositionOfHorses = input.shift().split("|");

    for (const horse of currentPositionOfHorses) {
        racingPositions.push(horse);
    }

    for (const line of input) {
        if (line.includes("Finish")) {
            break;
        }
        

        const tokens = line.split(" ");
        const command = tokens[0];

        if (command === "Retake") {
            const overtakingHorse = tokens[1];
            const overtakenHorse = tokens[2];
            let positionOvertakingHorse = racingPositions.indexOf(overtakingHorse);
            let positionOvertakenHorse = racingPositions.indexOf(overtakenHorse);
            if (positionOvertakingHorse < positionOvertakenHorse) {
                racingPositions[positionOvertakingHorse] =
                    racingPositions.splice(positionOvertakenHorse, 1, racingPositions[positionOvertakingHorse])[positionOvertakingHorse];
                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
            }
        } else if (command === "Trouble") {
            const horseName = tokens[1];
            let horsePosition = racingPositions.indexOf(horseName);
            if (horsePosition > 0) {
                racingPositions.splice(horsePosition, 1);
                racingPositions.splice(horsePosition - 1, 0, horseName)
                console.log(`Trouble for ${horseName} - drops one position.`);
            }
        }else if(command === "Rage"){
            const horseName = tokens[1];
            let horsePosition = racingPositions.indexOf(horseName);
            if(horsePosition < racingPositions.length){
                racingPositions.splice(horsePosition, 1);
                racingPositions.splice(horsePosition + 2, 0 ,horseName);
                console.log(`${horseName} rages 2 positions ahead.`);
            }
        }else if(command === "Miracle"){
            let lastHorse = racingPositions[0];
            racingPositions.shift();
            racingPositions.push(lastHorse);
            console.log(`What a miracle - ${lastHorse} becomes first.`);
        }
    }
    const winner = racingPositions[racingPositions.length-1];
    console.log(racingPositions.join("->"));
    console.log(`The winner is: ${winner}`);
}

horseRacing(
    (
        [
            'Onyx|Domino|Sugar|Fiona',
            'Trouble Onyx',
            'Retake Onyx Sugar',
            'Rage Domino',
            'Miracle',
            'Finish'
        ]
    )
)

horseRacing(
    (
        [
            'Fancy|Lilly',
            'Retake Lilly Fancy',
            'Trouble Lilly',
            'Trouble Lilly',
            'Finish',
            'Rage Lilly'
        ]
    )

)