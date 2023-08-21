const BASE_URL = "http://localhost:3030/jsonstore/tasks";
const loadBtn = document.getElementById("load-button");
const addBtn = document.getElementById("add-button");
let inputTitle = document.getElementById("title");
const toDoList = document.getElementById("todo-list");

function attachEvents() {
    loadBtn.addEventListener("click", loadTasks);
    addBtn.addEventListener("click", addTask);
}

function loadTasks(e) {
    if (e) {
      e.preventDefault();
    }
    toDoList.innerHTML = '';
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((list) => {
        Object.values(list)
          .forEach(({ name, _id }) => {
            const liItem = createElement('li', '', toDoList);
            createElement('span', name, liItem);
            const removeBtn = createElement('button', 'Remove', liItem);
            removeBtn.id = _id;
            removeBtn.addEventListener('click', removeTask);
  
            const editBtn = createElement('button', 'Edit', liItem);
            editBtn.id = _id;
            editBtn.addEventListener('click', editTask);
          })
      })
  }

  function addTask(event) {
    event.preventDefault();
    const headers = {
      method: 'POST',
      body: JSON.stringify({ name: inputTitle.value })
    };
    if (typeof inputTitle.value !== "string" ||
      inputTitle.value.length <= 3) {
      return;
    }
    fetch(BASE_URL, headers)
      .then(() => loadTasks(event))
    inputTitle.value = "";
}

function editTask(e){
  const parentElement = e.target.parentElement;
  e.target.parentElement.innerHTML = `
  <input value='${
    e.target.parentElement.querySelector("span").textContent
  }'/>
    <button id=${e.target.id} class="remove-button">Remove</button>
    <button id=${e.target.id} class="submit-button">Submit</button>`;
  parentElement.querySelector('.remove-button')
    .addEventListener('click', removeTask);
  parentElement.querySelector('.submit-button')
    .addEventListener('click', editTaskHandler);
}

function editTaskHandler(e){
  const inputValue = e.target.parentElement.querySelector("input").value;
  const headers = {
    method: "PATCH",
    body: JSON.stringify({ name: inputValue})
  };

  fetch(BASE_URL + `/${e.target.id}`, headers)
  .then(() => loadTasks());
}

function removeTask(e){
  const id =e.target.id;
  const headers = {
    method: "DELETE"
  };
  fetch(BASE_URL + `/${id}`, headers)
  .then(() => loadTasks());
}


function createElement(elementTag, value, parent) {
    const newElement = document.createElement(elementTag);
    newElement.innerHTML = value;
    if (parent) {
        parent.appendChild(newElement);
    }

    return newElement;
}

attachEvents();
