
function createTextElement(tagname, id, textContent, parentElement, classList) {
    const el = document.createElement(tagname);
    el.setAttribute("id", id);
    el.setAttribute("class", classList);
    el.textContent = textContent;
    parentElement.append(el);
    return el;
}

function createInputElement(
    tagname,
    id,
    classList,
    type,
    parentElement,
    placeholderText
) {

    const el = document.createElement(tagname);
    el.setAttribute("id", id);
    el.setAttribute("class", classList);
    el.setAttribute("type", type);
    parentElement.append(el);
    el.placeholder = placeholderText;
    return el;
}

let input = createInputElement(
    "input",
    "input",
    "class",
    "text",
    root,
    "Vad heter du?"
);

const myBtn = createTextElement("button", "", "Add", root, "");

const inputDiv = createTextElement("div", "inputDiv", "", root, "");

let text;
let inputText;
let nameInput = localStorage.getItem("username");

myBtn.addEventListener("click", () => {
    console.log(input.value);
    inputText = input.value;
    localStorage.setItem("username", inputText);
    addItem();
});

function addItem() {
    let nameInput = localStorage.getItem("username");
    inputDiv.innerHTML +=
    `<div id='name'> ` +
    nameInput +
    `<button id="delBtn">Delete</button></div>`;
}

let delBtn = document.getElementById("delBtn");

inputDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        localStorage.removeItem("username");
    }
});

if (nameInput) {
    addItem(nameInput);
}