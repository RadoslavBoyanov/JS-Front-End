function solve(array) {
    let username = array[0];
    let correctPass = username.split("").reverse().join("");
    let passwords = array;
    passwords.shift();

    let countForBlock = 0;

    for (let index = 0; index < passwords.length; index++) {
        if(passwords[index] === correctPass){
            console.log(`User ${username} logged in.`)
            break;
        }
        if(countForBlock == 3){
            console.log(`User ${username} blocked!`)
            break;
        }

        if(passwords[index] !== correctPass){
            console.log("Incorrect password. Try again.")
            countForBlock++;
        }
    }
}

solve(["Acer","login","go","letme in","recA"])
solve(['sunny','rainy','cloudy','sunny','not sunny'])