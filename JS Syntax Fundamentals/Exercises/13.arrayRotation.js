function solve(array, count) {
    for (let i = 1; i <= count; i++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }

    console.log(array.join(" "));
}

solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)
solve([2, 4, 15, 31], 5)