window.addEventListener('load', solve);

function solve() {
    const tasks = {};
    const inputsSelectors = {
        title: document.getElementById("title"),
        descritprion: document.getElementById("description"),
        label: document.getElementById("label"),
        points: document.getElementById("points"),
        assignee: document.getElementById("assignee"),
    }

    const otherDOMSelectors = {
        createTaskBtn: document.getElementById("create-task-btn"),
        deleteTaskBtn: document.getElementById("delete-task-btn"),
        taskSection: document.getElementById("tasks-section"),
        totalPoints: document.getElementById("total-sprint-points"),
    }

    const labelNames = {
        "Feature": "feature",
        "Low Priority Bug": "low-priority",
        "High Priority Bug": "high-priority",
    }

    const icons = {
        "Feature": "&#8865;",
        "Low Priority Bug": "&#9737;",
        "High Priority Bug": "&#9888;"
    }

    otherDOMSelectors.createTaskBtn.addEventListener("click", createTask);
    otherDOMSelectors.deleteTaskBtn.addEventListener("click", deleteTask);

    function createTask(){
        const hasValidInputsValues = Object.values(inputsSelectors)
            .some((input) => input.value === "");

        if(hasValidInputsValues){
            return;
        }

        const taskId = `task-${Object.keys(tasks).length + 1}`;
        const article = createElement("article", null, otherDOMSelectors.taskSection, ["task-card"], taskId, false);
        createElement("div", `${label.value} ${icons[inputsSelectors.label.value]}`, article, ["task-card-label", labelNames[label.value]], null, true);
        createElement("h3", inputsSelectors.title.value, article,["task-card-title"], null, false);
        createElement("p", inputsSelectors.descritprion.value, article, ["task-card-description"], null, false);
        createElement("div", `Estimatet at ${inputsSelectors.points.value} pts`, article, ["task-cart-points"], null, false);
        createElement("div", `Assigned to: ${inputsSelectors.assignee.value}`, article, ["task-card-assigne"], null, false);
        const taskCardActions = createElement("div", "", article, ["task-card-actions"], null, false);
        const deleteBtn = createElement("button", "Delete", taskCardActions, [], null, true);

        tasks[taskId] = {
            title: inputsSelectors.title.value,
            descritprion: inputsSelectors.descritprion.value,
            label: inputsSelectors.label.value,
            points: inputsSelectors.points.value,
            assignee: inputsSelectors.assignee.value
        }

        clearInputFields();
        updateTotalPoints();

        deleteBtn.addEventListener("click", loadConfirmDelete);
    }

    function loadConfirmDelete(e){
        const taskId = e.target.parentNode.parentNode.getAttribute('id');
        document.getElementById('task-id').value = taskId;
        for (const key in inputsSelectors) {
            inputsSelectors[key].value = tasks[taskId][key];
        }
        Object.values(inputsSelectors)
            .forEach((input) => {
                input.setAttribute('disabled', true);
            })
        otherDOMSelectors.createTaskBtn.setAttribute('disabled', true);
        otherDOMSelectors.deleteTaskBtn.removeAttribute('disabled');
    }

    function deleteTask(){
        const taskId = document.getElementById('task-id').value;
        const taskToRemove = document.getElementById(taskId);
        taskToRemove.remove();
        delete tasks[taskId];
        otherDOMSelectors.deleteTaskBtn.setAttribute('disabled', true);
        otherDOMSelectors.createTaskBtn.removeAttribute('disabled');
        Object.values(inputsSelectors)
            .forEach((input) => {
                input.removeAttribute('disabled');
            });
        clearInputFields();
        updateTotalPoints();
    }


    function clearInputFields() {
        Object.values(inputsSelectors)
            .forEach((input) => {
                input.value = '';
            });
    }

    function updateTotalPoints() {
        const totalSprintPoints = Object.values(tasks).map((t) => Number(t.points)).reduce((a, b) => a + b, 0);
        otherDOMSelectors.totalPoints.textContent = `Total Points ${totalSprintPoints}pts`;
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
}