window.addEventListener("load", solve);

function solve() {

  const inputSelectors = {
    student: document.getElementById("student"),
    university: document.getElementById("university"),
    score: document.getElementById("score"),
  }

  const otherDOMSelectors = {
    nextBtn: document.getElementById("next-btn"),
    formElement: document.querySelector(".applyContent"),
    ulPreviewElement: document.getElementById("preview-list"),
    ulCandidatesElement: document.getElementById("candidates-list"),
  }

  otherDOMSelectors.formElement.addEventListener("submit", submitForm);
  otherDOMSelectors.nextBtn.addEventListener("click", addToPreviewList);

  function addToPreviewList() {
    const hasValidInputsValues = Object.values(inputSelectors)
      .some((input) => input.value === "");

    if (hasValidInputsValues) {
      return;
    }

    otherDOMSelectors.nextBtn.disabled = false;

    const liElement = createElement("li", "", otherDOMSelectors.ulPreviewElement, ["application"], null);
    const article = createElement("article", "", liElement, [], null);
    const studentName = createElement("h4", inputSelectors.student.value, article, [], null);
    const universityName = createElement("p", `University: ${inputSelectors.university.value}`, article, [], null);
    const scorePoints = createElement("p", `Score: ${inputSelectors.score.value}`, article, [], null);
    const editBtn = createElement("button", "edit", liElement, ["action-btn", "edit"], null);
    const applyBtn = createElement("button", "apply", liElement, ["action-btn", "apply"], null);


    let editName = inputSelectors.student.value;
    let editUniversityName = inputSelectors.university.value;
    let editScore = inputSelectors.score.value;

    otherDOMSelectors.nextBtn.disabled = true;
    clearInputFields();

    editBtn.addEventListener("click", editInformationAboutStudent);

    function editInformationAboutStudent() {
      inputSelectors.student.value = editName;
      inputSelectors.university.value = editUniversityName;
      inputSelectors.score.value = editScore;
      liElement.remove();
      otherDOMSelectors.nextBtn.disabled = false;
    }

    applyBtn.addEventListener("click", applyForScolarship);

    function applyForScolarship() {
      otherDOMSelectors.ulCandidatesElement.appendChild(liElement);
      editBtn.remove();
      applyBtn.remove();
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
