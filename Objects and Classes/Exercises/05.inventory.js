function registerHeroes(input){

    let heroes = [];
    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        heroes.push({name, level, items})
    }

    let sortedHeroes = heroes.sort((a, b) => a.level-b.level)
    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])