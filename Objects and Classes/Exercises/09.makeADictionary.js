function termDefinition(input) {
    let termObject = {};

    for (const line of input) {
        let tokens = JSON.parse(line);
        let keys = Object.keys(tokens);
        termObject[keys[0]] = Object.values(tokens)[0];
    }

    let entries = Object.entries(termObject).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key, value] of entries) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }

}

termDefinition([ '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}', '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}' ])