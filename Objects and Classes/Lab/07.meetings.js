function meetings(array) {
    let dictionary = {};
    for (const string of array) {
        let [day, name] = string.split(' ');

        if (dictionary.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            dictionary[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    let entries = Object.entries(dictionary);

    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])