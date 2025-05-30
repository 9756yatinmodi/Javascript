
const input = document.getElementById("input")
const add = document.getElementById("addBtn")
const preview = document.getElementById("preview")
const upper = document.getElementById("upBtn")
const lower = document.getElementById("lowerBtn")
const clear = document.getElementById("clearBtn")
const word = document.getElementById("words")
const character = document.getElementById("char")
const time = document.getElementById("time")

add.addEventListener('click' , () => {
    const newtext = input.value
     preview.textContent = newtext;
     char.textContent = "Total Cheracters : "+newtext.length
    let textarray = newtext.split(" ")
    word.textContent= "Total words : "+textarray.length
    let seconds = textarray.length*0.25
    let h,m,s ;
     m= Math.floor(seconds/60);
     s= seconds % 60
     h = Math.floor(m/60)
    m = m % 60 ;

    time.textContent = h+"h" + ":"+m+"m"+":"+s+"s"




     
})

upper.addEventListener('click',()=>{
    const newtext = input.value
    
    preview.textContent=newtext.toUpperCase()
})

lower.addEventListener('click',()=>{
    const newtext = input.value
    
    preview.textContent = newtext.toLowerCase()
})

clear.addEventListener('click',()=>{

     input.value = " "
    preview.textContent =" "
    word.textContent = " "
    char.textContent = " "
   

})

