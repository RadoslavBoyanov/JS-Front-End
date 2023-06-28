function palidromeInteger(integers){
    function reversedNum(num) {
        return (
          parseFloat(
            num
              .toString()
              .split('')
              .reverse()
              .join('')
          ) * Math.sign(num)
        )                 
      }

    integers.forEach(integer => {
        if(integer.length == 1){
            console.log("true");
        }
        else if(integer == reversedNum(integer)){
            console.log("true");
        }
        else{
            console.log("false");
        }
    });
}

palidromeInteger([123,323,421,121])
palidromeInteger([32,2,232,1010])