const img=document.getElementById("img");
const btn=document.getElementById("btn");

function displayDog(){
fetch("https://dog.ceo/api/breeds/image/random")
.then((Response)=>Response.json())
.then((dog)=>{
img.src=dog.message
});
}
displayDog();

btn.addEventListener("click",()=>{
    displayDog();
});
