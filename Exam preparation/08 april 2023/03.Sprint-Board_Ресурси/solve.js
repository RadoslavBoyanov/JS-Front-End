const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

const inputSelectors = {
    taskTittle: document.getElementById("title"),
    description: document.getElementById("description"),
}

const buttonSelectors = {
    loadBoardBtn: document.getElementById("load-board-btn"),
    addTaskBtn: document.getElementById("create-task-btn"),
}

const otherDOMSelectors = {
    ulElement: document.getElementById("task-list"),
}

const statusContainerMap = {
    "ToDo": document.querySelector("#todo-section > .task-list"),
    "In Progress": document.querySelector("#in-progress-section > .task-list"),
    "Code Review": document.querySelector("#code-review-section > .task-list"),
    "Done": document.querySelector("#done-section > .task-list"),
}

const statusToTextContentMap = {
    'ToDo': 'Move to In Progress',
    'In Progress': 'Move to Code Review',
    'Code Review': 'Move to Done',
};
const textContentToStatusMap = {
    'Move to In Progress': 'In Progress',
    'Move to Code Review': 'Code Review',
    'Move to Done': 'Done',
};


function attachEvents() {
    buttonSelectors.loadBoardBtn.addEventListener("click", loadBoardTasks);
    buttonSelectors.addTaskBtn.addEventListener("click", addTask);
}

function loadBoardTasks() {
    clearAllSections();
    fetch(BASE_URL)
        .then((res) => res.json())
        .then((allTasks) => {
            Object.values(allTasks).forEach((task) => {
                const container = statusContainerMap[task.status];
                const liElement = createElement("li", "", container, ["task"], null);
                createElement("h3", task.title, liElement, [], null);
                createElement("p", task.description, liElement, [], null);
                const moveBtn = createElement("button", null, liElement, [], task._id);
                if (task.status !== "Done") {
                    moveBtn.textContent = statusToTextContentMap[task.status];
                    moveBtn.addEventListener("click", moveTask);
                } else {
                    moveBtn.textContent = "Close";
                    moveBtn.addEventListener("click", deleteTask);
                }
                container.append(liElement);
            })
        })
}

function addTask() {
    const { taskTittle, description } = inputSelectors;
    const hasValidInputsValues = Object.values(inputSelectors)
        .some((input) => input.value === "");

    if (hasValidInputsValues) {
        return;
    }

    const headers = {
        method: "POST",
        body: JSON.stringify({
            title: taskTittle.value,
            description: description.value,
            status: "ToDo"
        })
    };

    fetch(BASE_URL, headers)
        .then(loadBoardTasks)
        .catch(console.error);

    clearInputFields();
}

function moveTask(e) {
    const button = e.target;
    const taskId = button.getAttribute("id");
    const headers = {
        method: "PATCH",
        body: JSON.stringify({ status: textContentToStatusMap[button.textContent] })
    }

    fetch(`${BASE_URL}${taskId}`, headers)
        .then(loadBoardTasks)
        .catch(console.error)
}

function deleteTask(e) {
    const button = e.target;
    const taskId = button.getAttribute("id");
    const headers = {
        method: "DELETE",
    }

    fetch(`${BASE_URL}${taskId}`, headers)
        .then(loadBoardTasks)
        .catch(console.error)
}

function clearInputFields() {
    Object.values(inputSelectors)
        .forEach((input) => {
            input.value = '';
        });
}

function clearAllSections() {
    Object.values(statusContainerMap)
        .forEach((section) => {
            section.innerHTML = '';
        })
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

attachEvents();