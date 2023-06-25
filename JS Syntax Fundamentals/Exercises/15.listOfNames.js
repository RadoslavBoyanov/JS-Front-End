function solve(arrayNames){
    arrayNames.sort((a, b) => a.localeCompare(b));

    let count = 0;

    for (let index = 0; index < arrayNames.length; index++) {
        count++;
        console.log(`${count}.${arrayNames[index]}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"])