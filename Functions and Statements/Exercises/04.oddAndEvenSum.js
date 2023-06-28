function oddEvenSum(integer){
    let arrayNum = String(integer).split('');
    let odd =0, even = 0;

    arrayNum.forEach(number => {
        let num = Number(number);
        if(num % 2 ==0){
            even += num;
        } 
        else{
            odd += num;
        }
    });

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);