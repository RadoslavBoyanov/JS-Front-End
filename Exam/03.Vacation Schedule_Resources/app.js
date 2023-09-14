const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
let currentVacationId = "";

const inputSelectors = {
    name: document.getElementById("name"),
    numberOfDays: document.getElementById("num-days"),
    fromDate: document.getElementById("from-date"),
}

const buttonSelectors = {
    addVacationBtn: document.getElementById("add-vacation"),
    editVacationBtn: document.getElementById("edit-vacation"),
    loadVacationsBtn: document.querySelector("#load-vacations"),
}

const otherDOMSelectors = {
    formElement: document.querySelector("#form > form"),
    vacationContainer: document.getElementById("list"),
}

buttonSelectors.loadVacationsBtn.addEventListener("click", loadAllVacations);

function loadAllVacations() {
    otherDOMSelectors.vacationContainer.innerHTML = "";
    fetch(BASE_URL)
        .then((res) => res.json())
        .then((vacationsList) => {
            Object.values(vacationsList).forEach((vacation) => {
                const divElement = createElement("div", "", otherDOMSelectors.vacationContainer, ["container"], null);
                const vacationName = createElement("h2", vacation.name, divElement, [], null);
                const vacationDate = createElement("h3", vacation.date, divElement, [], null);
                const vacationDays = createElement("h3", vacation.days, divElement, [], null);
                const changeBtn = createElement("button", "Change", divElement, ["change-btn"], vacation._id);
                const doneBtn = createElement("button", "Done", divElement, ["done-btn"], vacation._id);


                buttonSelectors.editVacationBtn.disabled = true;

                changeBtn.addEventListener("click", (e) => {
                    inputSelectors.name.value = vacationName.textContent;
                    inputSelectors.fromDate.value = vacationDate.textContent;
                    inputSelectors.numberOfDays.value = vacationDays.textContent;
                    currentVacationId = changeBtn.getAttribute("id");

                    divElement.remove();
                    buttonSelectors.addVacationBtn.disabled = true;
                    buttonSelectors.editVacationBtn.disabled = false;
                });

                doneBtn.addEventListener("click", (event) => {
                    if(event){
                        event.preventDefault();
                    }
                    
                    let id = doneBtn.getAttribute("id");
                    fetch(`${BASE_URL}${id}`, {
                        method: "DELETE",
                    });

                    loadAllVacations();
                })

            })
        })
}

buttonSelectors.editVacationBtn.addEventListener("click", editVacation);

function editVacation(e) {
    const bodyObject = {
        name: inputSelectors.name.value,
        date: inputSelectors.fromDate.value,
        days: inputSelectors.numberOfDays.value,
    }

    fetch(`${BASE_URL}${currentVacationId}`, {
        method: "PUT",
        body: JSON.stringify(bodyObject)
    })
        .then(() => loadAllVacations());

    buttonSelectors.addVacationBtn.disabled = false;
    buttonSelectors.editVacationBtn.disabled = true;
    clearInputFields();
}


buttonSelectors.addVacationBtn.addEventListener("click", addVacation);

function addVacation() {

    const bodyObject = {
        name: inputSelectors.name.value,
        days: inputSelectors.numberOfDays.value,
        date: inputSelectors.fromDate.value,
    }

    const headers = {
        method: "POST",
        body: JSON.stringify(bodyObject)
    }

    fetch(BASE_URL, headers)
        .then(() => loadAllVacations())
        .catch(console.error)

    clearInputFields();
}

function clearInputFields() {
    Object.values(inputSelectors)
        .forEach((input) => {
            input.value = '';
        });
}

otherDOMSelectors.formElement.addEventListener("submit", submitForm);

function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
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