function factorialDiff(firstNumber, secondNumber) {
    function factorial(x) {
        if (x === 0) {
            return 1;
        }
        return x * factorial(x - 1);
    }
    let diff = factorial(firstNumber) / factorial(secondNumber);
    console.log(diff.toFixed(2));
}

factorialDiff(5, 2)
factorialDiff(6, 2)