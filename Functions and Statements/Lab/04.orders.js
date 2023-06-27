function orders(product, quantity){
    let price = 0;
    if(product === 'coffee'){
        price = 1.50 * quantity;
    } else if (product === 'water'){
        price = 1.00 * quantity;
    } else if( product === 'coke'){
        price = 1.40 * quantity;
    } else {
        price = 2.00 * quantity;
    }
    return price.toFixed(2);
}

console.log(orders("water", 5));