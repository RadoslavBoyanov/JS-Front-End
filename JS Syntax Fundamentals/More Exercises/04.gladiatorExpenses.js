function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmet = Math.trunc(lostFights / 2);
    let brokenSword = Math.trunc(lostFights / 3);
    let brokenShield = Math.trunc(lostFights / 6);
    let repairArmor = Math.trunc(lostFights / 12);

    let expenses = (brokenHelmet * helmetPrice) + (brokenSword * swordPrice) + (brokenShield * shieldPrice) + (repairArmor * armorPrice);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5)
solve(23,12.50,21.50,40,200)