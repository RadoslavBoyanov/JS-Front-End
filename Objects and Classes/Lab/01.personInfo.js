function personInfo(firstName, lastName, age) {
    age = Number(age);

    let person = { firstName, lastName, age };

    return person;
}

console.log(personInfo("George", "Smith", "18"));