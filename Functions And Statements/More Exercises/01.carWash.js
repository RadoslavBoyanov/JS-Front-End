function isCleanCar(array){
    let clean = 0;
    array.forEach(element => {
        switch(element){
            case "soap":
                clean += 10;
                break;
            case "water":
                clean *= 1.20;
                break;
            case "vacuum cleaner":
                clean *= 1.25;
                break;
            case "mud":
                clean *= 0.90;
                break;
            default:    
        }   
    });
    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}
isCleanCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
isCleanCar(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])