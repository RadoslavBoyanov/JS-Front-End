function solve(array, step) {
    let coppyArray = [];

    for (let i = 0; i < array.length; i += step) {
        coppyArray.push(array[i]);

        
    }

    return coppyArray;
}

solve(['5','20','31','4','20'],2)