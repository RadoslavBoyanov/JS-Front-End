function solve(start, end){
    let sum = 0;
    let array = [];
    for (let i = start; i <= end; i++){
        sum += i;
        array.push(i);
    }

    console.log(array.join(' ',))
    console.log(`Sum: ${sum}`)
}

solve(5, 10)
solve(0, 26)