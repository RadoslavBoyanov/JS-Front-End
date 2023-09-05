window.addEventListener("load", solve);

function solve() {
    const inputsSelectors = {
        title: document.getElementById("task-title"),
        category: document.getElementById("task-category"),
        content: document.getElementById("task-content"),
    }

    const otherDOMSelectors = {
        publishBtn: document.getElementById("publish-btn"),
        formElement: document.querySelector(".newPostContent"),
        reviewElement: document.getElementById("review-list"),
        uploadElement: document.getElementById("published-list"),
    }

    otherDOMSelectors.formElement.addEventListener("submit", submitForm);

    function submitForm(event) {
        event.preventDefault();
    }

    otherDOMSelectors.publishBtn.addEventListener("click", publishTask);

    function publishTask() {
        const hasValidInputsValues = Object.values(inputsSelectors)
            .some((input) => input.value === "");

        if (hasValidInputsValues) {
            return;
        }

        const liElement = createElement("li", "", otherDOMSelectors.reviewElement,["rpost"], null, false);
        const article = createElement("article", "", liElement, [], null, false);
        createElement("h4", inputsSelectors.title.value, article, [], null, false);
        createElement("p", `Category: ${inputsSelectors.category.value}`, article, [], null, false);
        createElement("p", `Content: ${inputsSelectors.content.value}`, article, [], null, false);

        const editBtn = createElement("button", "Edit", liElement, ["action-btn", "edit"], null, true);
        const postBtn = createElement("button", "Post", liElement, ["action-btn", "post"], null, true);

        const editTitle = inputsSelectors.title.value;
        const editCategory = inputsSelectors.category.value;
        const editContent = inputsSelectors.content.value;

        inputsSelectors.title.value = "";
        inputsSelectors.category.value = "";
        inputsSelectors.content.value = "";

        editBtn.addEventListener("click", editTask);

        function editTask(){
            inputsSelectors.title.value = editTitle;
            inputsSelectors.category.value = editCategory;
            inputsSelectors.content.value = editContent;

            liElement.remove();
        }

        postBtn.addEventListener("click", postTask);

        function postTask(){
            otherDOMSelectors.uploadElement.appendChild(liElement);
            liElement.removeChild(editBtn);
            liElement.removeChild(postBtn);
        }
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