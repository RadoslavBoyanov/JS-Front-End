function catalogue(input) {
    let products = {};
    for (const line of input) {
        let [productName, price] = line.split(' : ');
        if (!products.hasOwnProperty(productName[0])) {
            products[productName[0]] = [];
        }
        products[productName[0]].push({ productName, price: Number(price) });
    }
    let keys = Object.keys(products).sort((productA, productB) => productA.localeCompare(productB));
    for (let index = 0; index < keys.length; index++) {
        console.log(keys[index]);
        products[keys[index]].sort((productA, productB) => productA.productName.localeCompare(productB.productName)).forEach(product => {
            console.log(`  ${product.productName}: ${product.price}`);
        });
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])