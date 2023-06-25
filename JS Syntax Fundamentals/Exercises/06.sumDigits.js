function solve(number) {
    output = [];


    sNumber = number.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }

    for (var i = 0, sum = 0; i < output.length; sum += output[i++]) { }
    console.log(sum);
}

solve(543)
solve(245678)