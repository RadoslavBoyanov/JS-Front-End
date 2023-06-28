function solve(firstInteger, secontInteger, thirdInteger) {
    let sum = (a, b) => a + b;
    let substract = (a,b) => a - b;

    let add = sum(firstInteger, secontInteger);
    return substract(add , thirdInteger);
}

console.log(solve(23,6,10));
console.log(solve(1,17,30));