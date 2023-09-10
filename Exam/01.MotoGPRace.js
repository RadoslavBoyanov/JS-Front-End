function raceMotoGP(input) {
    let racers = {};
    let racersCount = input.shift();

    let everyRacer = input.splice(0, racersCount);
    for (const racer of everyRacer) {
        let [name, fuel, position] = racer.split("|");
        racers[name] = { racer: name, capacity: fuel, place: position };
    }

    for (const line of input) {
        if (line.includes("Finish")) {
            break;
        }

        let tokens = line.split(" - ");
        const command = tokens[0];
        if (command === "StopForFuel") {
            let rider = tokens[1];
            let minimumFuel = tokens[2];
            let changedPosition = tokens[3];

            if (racers[rider].capacity < minimumFuel && racers[rider].capacity < 100 ) {
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                racers[rider].place = changedPosition
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
        } else if (command === "Overtaking") {
            const riderOne = tokens[1];
            const riderTwo = tokens[2];

            if (racers[riderOne].place < racers[riderTwo].place) {
                let placeOnRiderTwo = racers[riderOne].place;
                let placeOnRiderOne = racers[riderTwo].place;

                racers[riderOne].place = placeOnRiderOne;
                racers[riderTwo].place = placeOnRiderTwo;

                console.log(`${riderOne} overtook ${riderTwo}!`);
            }
        } else {
            let rider = tokens[1];
            let lapsLeft = tokens[2];

            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            delete racers[rider];
        }
    }

    const keys = Object.keys(racers);
    for (const key of keys) {
        console.log(key);
        console.log(`   Final position: ${racers[key].place}`);
    }
}

raceMotoGP(
    (
        [
            "3",
            "Valentino Rossi|100|1",
            "Marc Marquez|90|2",
            "Jorge Lorenzo|80|3",
            "StopForFuel - Valentino Rossi - 50 - 1",
            "Overtaking - Marc Marquez - Jorge Lorenzo",
            "EngineFail - Marc Marquez - 10",
            "Finish"
        ]
    )
)

raceMotoGP(
    (
        [
            "4",
            "Valentino Rossi|100|1",
            "Marc Marquez|90|3",
            "Jorge Lorenzo|80|4",
            "Johann Zarco|80|2",
            "StopForFuel - Johann Zarco - 90 - 5",
            "Overtaking - Marc Marquez - Jorge Lorenzo",
            "EngineFail - Marc Marquez - 10",
            "Finish"
        ]
    )
)