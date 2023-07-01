function storeProvision(arrayStock, arrayProducts) {
    let array = [...arrayStock, ...arrayProducts];
    let store = {};
    for (let index = 0; index < array.length; index += 2) {
        let key = array[index]
        let value = array[index + 1];
        if(!store.hasOwnProperty(key)){
            store[key] = Number(value);
        }else{
            store[key] += Number(value);
        }
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])