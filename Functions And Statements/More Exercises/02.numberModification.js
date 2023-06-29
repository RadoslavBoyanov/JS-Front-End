function numberModification(number) {
    let splitNumber = String(number).split("");

    function avgNum(num) {
        let avg = 0;
        for (let index = 0; index < num.length; index++) {
            avg += Number(num[index]);
        }
        return avg /= num.length;
    }

    let avg = avgNum(splitNumber);
    while (avg < 5) {
        avg = avgNum(splitNumber);
        if (avg < 5){
            splitNumber.push(9);
        }
    }
    console.log(splitNumber.join(""));
}

// numberModification(5835);
numberModification(101);