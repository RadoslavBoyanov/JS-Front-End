function isPerfectNumber(number){
    let temp = 0;

    for (let index = 0; index < number; index++) {
        if(number % index === 0){
            temp += index;
        }
    }

    if(temp === number & temp !== 0){
        console.log('We have a perfect number!');
    }
    else{
        console.log('It\'s not so perfect.');
    }
}

isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(1236498);