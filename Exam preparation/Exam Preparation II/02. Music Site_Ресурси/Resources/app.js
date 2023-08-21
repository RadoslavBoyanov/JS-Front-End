window.addEventListener('load', solve);

function solve() {
    let counter = 0;

    const inputSelectors = {
        genre: document.getElementById("genre"),
        name: document.getElementById("name"),
        author: document.getElementById("author"),
        date: document.getElementById("date"),
    }

    const otherDOMSelectors = {
        collectionContainer: document.querySelector(".all-hits-container"),
        savedSongsContainer: document.querySelector(".saved-container"),
        totalLikes: document.querySelector(".likes > p"),
        formElement: document.querySelector("#append-song > div > div > form"),
        addBtn: document.getElementById("add-btn"),
    }

    otherDOMSelectors.formElement.addEventListener("submit", submitForm);
    otherDOMSelectors.addBtn.addEventListener("click", addSongToCollection);

    function addSongToCollection() {
        const hasValidInputsValues = Object.values(inputSelectors)
            .some((input) => input.value === "");

        if (hasValidInputsValues) {
            return;
        }

        const divContainer = createElement("div", "", otherDOMSelectors.collectionContainer, ["hits-info"], null);
        const img = document.createElement("img");
        img.src = "./static/img/img.png";
        divContainer.appendChild(img);

        createElement("h2", `Genre: ${inputSelectors.genre.value}`, divContainer, [], null);
        createElement("h2", `Name: ${inputSelectors.name.value}`, divContainer, [], null);
        createElement("h2", `Author: ${inputSelectors.author.value}`, divContainer, [], null);
        createElement("h3", `Date: ${inputSelectors.date.value}`, divContainer, [], null);
        const saveSongBtn = createElement("button", "Save song", divContainer, ["save-btn"], null);
        const likeSongBtn = createElement("button", "Like song", divContainer, ["like-btn"], null);
        const deleteSongBtn = createElement("button", "Delete", divContainer, ["delete-btn"], null);
        clearInputFields();

        likeSongBtn.addEventListener("click", likeSong);

        function likeSong() {
            otherDOMSelectors.totalLikes.textContent = `Total Likes: ${counter += 1}`;
            likeSongBtn.disabled = true;
        }

        saveSongBtn.addEventListener("click", saveSong);

        function saveSong() {
            otherDOMSelectors.savedSongsContainer.appendChild(divContainer);
            divContainer.removeChild(saveSongBtn);
            divContainer.removeChild(likeSongBtn);
        }

        deleteSongBtn.addEventListener("click", deleteSong);

        function deleteSong() {
            divContainer.remove()
        }
    }

    function clearInputFields() {
        Object.values(inputSelectors)
            .forEach((input) => {
                input.value = '';
            });
    }

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
}