function loadingBar(number){
    if(number === 100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
    else{
        let result = `${number}% [${"%".repeat(number/10)}${".".repeat((100 - number) / 10)}]`
        console.log(result);
        console.log("Still loading...");
    }
}

loadingBar("60")