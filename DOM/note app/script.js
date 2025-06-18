 
const inputBox = document.querySelector("#input-box");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#add");
const textarea = document.querySelector('#note');

const outputBox = document.querySelector('#output-box')

let notearray = [];
let titlearray = [];

function displaynote (){
outputBox.innerHTML=""
 titlearray.forEach((title,index)=>{
 const div = document.createElement("div");
const t = document.createElement("p");
const note = document.createElement("p");
const Editbtn = document.createElement("button");
const Delbtn = document.createElement("button")

div.className = "border border-2 px-4 py-2 w-25 shadow-lg"
 Editbtn.className="btn btn-warning mx-2"
Delbtn.className = "btn btn-danger "



t.textContent = title
note.textContent = notearray[index]
Editbtn.textContent = "Edit"
Delbtn.textContent = "Delete"

  Editbtn.addEventListener('click',()=>{
     edit(index);
    })

    Delbtn.addEventListener('click',()=>{
     Delete(index);
    })

div.appendChild(t)
div.appendChild(note)
div.appendChild(Editbtn)
div.appendChild(Delbtn)

outputBox.appendChild(div)


})
  
}



function edit (index){
input.value = titlearray[index]
textarea.value = notearray[index]
titlearray.splice(index , 1)
notearray.splice(index,1)
}


function Delete (index){
titlearray.splice(index , 1)
notearray.splice(index , 1)
displaynote()
}

addBtn.addEventListener('click',()=>{
    const value = input.value
    const notevalue = textarea.value
    titlearray.push(value)
    notearray.push(notevalue)
    displaynote()
      input.value=""
      textarea.value=""
})

displaynote()

