function solve(number, op1, op2, op3, op4, op5){

    let sum = Number(number);

    let operations = [op1, op2, op3, op4, op5];

    for (let i = 0; i < operations.length; i++) {
        if(operations[i] === 'chop'){
            number /=2;
        }
        else if(operations[i] === 'dice'){
            let sum = Math.sqrt(number);
            number = sum;
        }
        else if(operations[i] === 'spice'){
            number ++;
        }
        else if(operations[i] === 'bake'){
            number *= 3;
        }
        else{
            number = number - (number * 0.20); 
        }

        console.log(number);
    }
}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
