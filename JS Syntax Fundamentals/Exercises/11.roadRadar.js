function solve(speed, place) {
    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;
    let speeding = 0;
    let status;

    if (place === 'motorway') {
        if (speed <= motorway) {
            console.log(`Driving ${speed} km/h in a ${motorway} zone`)
        }
        else if (speed > motorway) {
            if (speed - motorway <= 20) {
                status = 'speeding';
            }
            else if (speed - motorway >= 20 && speed - motorway <= 40) {
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }

            speeding = speed - motorway;
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${motorway} - ${status}`)
        }
    }
    else if (place === 'interstate') {
        if (speed <= interstate) {
            console.log(`Driving ${speed} km/h in a ${interstate} zone`)
        }
        else if (speed > interstate) {
            if (speed - interstate <= 20) {
                status = 'speeding';
            }
            else if (speed - interstate >= 20 && speed - interstate <= 40) {
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }

            speeding = speed - interstate;
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${interstate} - ${status}`)
        }
    }
    else if (place === 'city') {
        if (speed <= city) {
            console.log(`Driving ${speed} km/h in a ${city} zone`)
        }
        else if (speed > city) {
            if (speed - city <= 20) {
                status = 'speeding';
            }
            else if (speed - city >= 20 && speed - city <= 40) {
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }

            speeding = speed - city;
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${city} - ${status}`)
        }
    }
    else if (place === 'residential') {
        if (speed <= residential) {
            console.log(`Driving ${speed} km/h in a ${residential} zone`)
        }
        else if (speed > residential) {
            if (speed - residential <= 20) {
                status = 'speeding';
            }
            else if (speed - residential >= 20 && speed - residential <= 40) {
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }

            speeding = speed - residential;
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${residential} - ${status}`)
        }
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')