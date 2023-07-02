function parkingLot(input) {
    let curNumbers = new Set();

    for (const line of input) {
        let tokens = line.split(", ");
        if (tokens[0] === 'IN') {
            curNumbers.add(tokens[1]);
        }
        else if (tokens[0] === 'OUT') {
            curNumbers.delete(tokens[1]);
        }
    }

    if (curNumbers.size > 0) {
        const sortedNumbersArray = Array.from(curNumbers).sort((a, b) => a.localeCompare(b));
        const sortedNumbersSet = new Set(sortedNumbersArray);
        for (const number of sortedNumbersSet) {
            console.log(number);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])