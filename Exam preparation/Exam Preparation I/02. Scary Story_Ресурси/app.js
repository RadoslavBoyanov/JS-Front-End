window.addEventListener("load", solve);

function solve() {

  const selectorsInputs = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    storyTitle: document.getElementById("story-title"),
    storyText: document.getElementById("story"),
    genre: document.getElementById("genre"),
  }

  const otherDOMSelectors = {
    publishBtn: document.getElementById("form-btn"),
    previewUlList: document.getElementById("preview-list"),
    mainDiv: document.getElementById("main"),
    body: document.querySelector(".body"),
  }

  otherDOMSelectors.publishBtn.addEventListener("click", publishStory);

  function publishStory() {
    const hasValidInputsValues = Object.values(selectorsInputs)
      .some((input) => input.value === "");

    if (hasValidInputsValues) {
      return;
    }

    const liElement = createElement("li", "", otherDOMSelectors.previewUlList, ["story-info"], null, false);
    const articleElement = createElement("article", "", liElement, [], null, false);
    const names = createElement("h4", `Name: ${selectorsInputs.firstName.value} ${selectorsInputs.lastName.value}`, articleElement, [], null, false);
    const age = createElement("p", `Age: ${selectorsInputs.age.value}`, articleElement, [], null, false);
    const title = createElement("p", `Title: ${selectorsInputs.storyTitle.value}`, articleElement, [], null, false);
    const genre = createElement("p", `Genre: ${selectorsInputs.genre.value}`, articleElement, [], null, false);
    const text = createElement("p", selectorsInputs.storyText.value, articleElement, [], null, false);
    const saveBtn = createElement("button", "Save Story", liElement, ["save-btn"], null, true);
    const editBtn = createElement("button", "Edit Story", liElement, ["edit-btn"], null, true);
    const deleteBtn = createElement("button", "Delete Story", liElement, ["delete-btn"], null, true);

    let editFirstName = selectorsInputs.firstName.value;
    let editLastName = selectorsInputs.lastName.value;
    let editAge = selectorsInputs.age.value;
    let editStoryTitle = selectorsInputs.storyTitle.value;
    let editStoryText = selectorsInputs.storyText.value;

    otherDOMSelectors.publishBtn.disabled = true;
    selectorsInputs.firstName.value = "";
    selectorsInputs.lastName.value = "";
    selectorsInputs.age.value = "";
    selectorsInputs.storyTitle.value = "";
    selectorsInputs.storyText.value = "";

    editBtn.addEventListener("click", editStory);

    function editStory() {
      selectorsInputs.firstName.value = editFirstName;
      selectorsInputs.lastName.value = editLastName;
      selectorsInputs.age.value = editAge;
      selectorsInputs.storyTitle.value = editStoryTitle;
      selectorsInputs.storyText.value = editStoryText;

      otherDOMSelectors.publishBtn.disabled = false;
      liElement.remove();
    }

    saveBtn.addEventListener("click", saveStory);

    function saveStory(){
      otherDOMSelectors.mainDiv.remove();
      const newDivMain = createElement("div", "", otherDOMSelectors.body, [], "main", true);
      const messageSave = createElement("h1", "Your scary story is saved!", newDivMain, [], null, false);
    }

    deleteBtn.addEventListener("click", deleteStory);

    function deleteStory(){
      liElement.remove();
      otherDOMSelectors.publishBtn.disabled = false;
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
}

