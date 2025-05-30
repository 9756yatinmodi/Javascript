
let submit = document.getElementById("Submit-btn")


submit.addEventListener('click',()=>{

    let rendomNumber = Math.random() * 1677726;
    let rendom = Math.floor(rendomNumber);
   let color =  "#" + rendom.toString(16);

    document.body.style.backgroundColor = color

    submit.textContent = color
})
 let copy = document.getElementById("copy-btn")

 copy.addEventListener('click', ()=>{
 {

    const text = document.getElementById(submit).innerText;

    // Copy to clipboard using clipboard API
    navigator.clipboard.writeText(text)
      .then(() => alert("Text copied!"))
      .catch(err => alert("Failed to copy: " + err));
  }
 })

