function solve(goldForEachDay) {
    let boughtBitcoins = 0;
    let money = 0;
    const bitcoinPrice = 11949.16;
    const oneGramOfGold = 67.51;
    let firstPurchasedBitcoin = 0;
    let days = 0;

    for (let index = 0; index < goldForEachDay.length; index++) {
        days++;
        if (days % 3 == 0) {
            goldForEachDay[index] *= 0.70;
        }

        money += goldForEachDay[index] * oneGramOfGold;
        while (money >= bitcoinPrice) {
            boughtBitcoins++;
            money -= bitcoinPrice;
            if (boughtBitcoins === 1) {
                firstPurchasedBitcoin = days;
            }
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`)
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchasedBitcoin}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)

}

solve([100, 200, 300])
solve([50, 100])
solve([3124.15, 504.212, 2511.124])