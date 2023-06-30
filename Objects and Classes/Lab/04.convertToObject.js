function converterObject(stringJson){
    let person = JSON.parse(stringJson);

    let entries = Object.entries(person);

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

converterObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')