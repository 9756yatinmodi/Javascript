

const inputBox = document.querySelector("#input-box");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#add");

const outputBox = document.querySelector("#output-box")

let todo = ["wake up 5AM","workout","read book"];

function displaytodo (){
outputBox.innerHTML=""
todo.forEach((todo , index)=>{
  const div = document.createElement("div");
    const p = document.createElement("p");
    const Delbtn = document.createElement("button");

    div.className = "d-flex justify-content-between my-3 bg-light"
    Delbtn.className="btn btn-danger w-25"

    p.textContent = todo
    Delbtn.textContent = "Delete"

    div.appendChild(p);
    div.appendChild(Delbtn);

    outputBox.appendChild(div)

})
}

addBtn.addEventListener('click',()=>{
    const value = input.value;
    todo.push(value);
    displaytodo()
    input.value=""
})

displaytodo()