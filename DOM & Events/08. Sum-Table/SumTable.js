function sumTable() {
    let productsCost = Array.from
        (document.querySelectorAll
            ("table tr:not(:last-child) td:nth-child(2)")
        );
    console.log(productsCost);
    let sum = document.getElementById('sum');
    let totalSum = 0;
    productsCost.forEach(product => {
        totalSum += Number(product.textContent);
    });
    sum.textContent = totalSum;
}


