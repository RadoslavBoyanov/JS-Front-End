const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
let globalId = 0;
let objectProducts = {};

const inputSelectors = {
    productName: document.getElementById("product"),
    count: document.getElementById("count"),
    price: document.getElementById("price"),
}

const buttonSelectors = {
    addProductsBtn: document.getElementById("add-product"),
    updateProductBtn: document.getElementById("update-product"),
    loadProductBtn: document.getElementById("load-product"),
}

const otherDOMSelectors = {
    formElement: document.getElementsByTagName("form"),
    tbodyElement: document.getElementById("tbody"),
}

buttonSelectors.loadProductBtn.addEventListener("click", loadProducts);
buttonSelectors.addProductsBtn.addEventListener("click", addProduct);
buttonSelectors.updateProductBtn.addEventListener("click", activatingUpdate);

function loadProducts(event) {
    if (event) {
        event.preventDefault();
    }

    otherDOMSelectors.tbodyElement.innerHTML = "";

    fetch(BASE_URL)
        .then((res) => res.json())
        .then((listOfProducts) => {
            Object.values(listOfProducts).forEach((product) => {
                objectProducts[product.product] = product._id;
                const tableRow = createElement("tr", "", otherDOMSelectors.tbodyElement, [], null);
                createElement("td", product.product, tableRow, ["name"], null);
                createElement("td", product.count, tableRow, ["count-product"], null);
                createElement("td", product.price, tableRow, ["product-price"], null);
                const tdButtons = createElement("td", "", tableRow, ["btn"], null);
                const updateBtn = createElement("button", "Update", tdButtons, ["update"], null);
                const deleteBtn = createElement("button", "Delete", tdButtons, ["delete"], null);

                updateBtn.addEventListener("click", updateProduct);
                deleteBtn.addEventListener("click", deleteProduct);
            });
        });
}

function addProduct(event) {
    if (event) {
        event.preventDefault();
    }

    const bodyObject = {
        product: inputSelectors.productName.value,
        count: inputSelectors.count.value,
        price: inputSelectors.price.value
    }

    const headers = {
        method: "POST",
        body: JSON.stringify(bodyObject)
    }

    fetch(BASE_URL, headers)
        .then(() => loadProducts());

    clearInputFields();
}

function updateProduct(event){
    if(event){
        event.preventDefault();
    }
    let productName = event.target.parentElement.parentElement.children[0].textContent;
    globalId = objectProducts[productName];
    buttonSelectors.updateProductBtn.disabled = false;
    buttonSelectors.addProductsBtn.disabled = true;
    let productValues = Array.from(event.target.parentElement.parentElement.children);
    Array.from(document.querySelectorAll(".list input"))
        .forEach((input, index) => input.value = productValues[index].textContent);
}


function activatingUpdate(event) {
    if(event){
        event.preventDefault();
    }
    let bodyObject = {
        product: inputSelectors.productName.value,
        count: inputSelectors.count.value,
        price: inputSelectors.count.value,
    };

    const headers = {
        method: "PATCH",
        body: JSON.stringify(bodyObject),
    };

    fetch(`${BASE_URL}${globalId}`, headers)

        .then(() => loadProducts());
}

function deleteProduct(event) {
    const id = objectProducts[event.target.parentElement.parentElement.children[0].textContent];

    const headers = {
        method: "DELETE",
    }

    fetch(BASE_URL + `${id}`, headers)
        .then(() => loadProducts());
}

function clearInputFields() {
    Object.values(inputSelectors)
        .forEach((input) => {
            input.value = '';
        });
}

function createElement(type, content, parentNode, classes, id, useInnerHtml) {
    const element = document.createElement(type);

    if (content && useInnerHtml) {
        element.innerHTML = content;
    } else {
        if (content && type !== 'input') {
            element.textContent = content;
        }

        if (content && type === 'input') {
            element.value = content;
        }
    }

    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id) {
        element.setAttribute('id', id);
    }

    if (parentNode) {
        parentNode.appendChild(element);
    }

    return element;
}
