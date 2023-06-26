function solve(startingYield){
    let days = 0;
    let yield = 0;
    const workersConsume = 26;
    const yieldDrop = 10;

    while (startingYield >= 100) {
        days++;
        yield += startingYield
        if(yield >= workersConsume){
            yield -= workersConsume;
        }
        startingYield -= yieldDrop;
    }
    if(yield >= workersConsume){
        yield -= workersConsume;
    }

   console.log(days)
   console.log(yield)
}

solve(111)
solve(450)