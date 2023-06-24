function solve(n, array){
    let newArray = [];
    for (let index = 0; index < n; index++) {
        newArray.push(array[index])
    }

    newArray.reverse();
    console.log(newArray.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);