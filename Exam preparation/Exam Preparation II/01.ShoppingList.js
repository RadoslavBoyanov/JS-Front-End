function shoppingList(input) {
    let products = [];

    const startingProducts = input.shift().split("!");
    for (const product of startingProducts) {
        products.push(product);
    }

    for (const line of input) {
        if(line.includes("Go Shopping!")){
            break;
        }

        const tokens = line.split(" ");
        let command = tokens[0];
        switch(command){
            case "Urgent":
                const item = tokens[1];
                if(!products.includes(item)){
                    products.unshift(item);
                }
                break;
            case "Unnecessary":
                const product = tokens[1];
                if(products.includes(product)){
                   let index = products.indexOf(product);
                   products.splice(index, 1); 
                }
                break;
            case "Correct":
                const oldItem = tokens[1];
                const newItem = tokens[2];
                if(products.includes(oldItem)){
                    let indexOfOldItem = products.indexOf(oldItem);
                    products.splice(indexOfOldItem, 1, newItem);
                }
                break;
            case "Rearrange":
                const grocery = tokens[1];
                if(products.includes(grocery)){
                    let indexOfGrocery = products.indexOf(grocery);
                    products.splice(indexOfGrocery, 1);
                    products.push(grocery);
                }
                break;
            default:
        }
    }

    const finalList = products.join(", ");
    console.log(finalList);
}

shoppingList(
    (
        [
            "Milk!Pepper!Salt!Water!Banana",
            "Urgent Salt",
            "Unnecessary Grapes",
            "Correct Pepper Onion",
            "Rearrange Grapes",
            "Correct Tomatoes Potatoes",
            "Go Shopping!"
        ]
    )
)