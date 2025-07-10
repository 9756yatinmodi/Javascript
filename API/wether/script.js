const container = document.getElementById("container");
const nav = document.getElementById("nav");
const temp = document.getElementById("temp")
const input = document.getElementById("input")
const searchBtn = document.getElementById("btn")
let now = new Date();

let options = {
  weekday: 'long',   // e.g., Thursday
  day: '2-digit',    // e.g., 10
  month: 'long',     // e.g., July
  year: 'numeric'    // e.g., 2025
};

let formattedDate = now.toLocaleDateString('en-IN', options);






// <div >
//         <h1>SURAT</h1>
//         <h4>Thrusday,10 july 2025</h4>
//         </div>
//         




//  <div class="tempbox1"><h1>15 <span>°C | °F</span></h1></div>


// <div class="tempbox2">
//     <img src="https://tse2.mm.bing.net/th/id/OIP.UwBhtPfg-hASeB4_2hvNogHaF6?pid=Api&P=0&h=180" alt="">
//     <div class="tempdetail">
//     <h4> <i class="fa-solid fa-temperature-low"></i>feels like : 31 °C </h4>
//    <h4> <i class="fa-solid fa-droplet"></i>Humidity : 15% </h4>
//    <h4>  <i class="fa-solid fa-wind"></i>wind : 14km/h</h4>
//     </div>
// </div>  







 




function displaywhether(Weather){
    const api = "https://api.openweathermap.org/data/2.5/weather?q="+Weather+"&appid=b0d4817103e8f3d9245e00adf7c563f9&units=metric";
fetch(api).then(Response=>Response.json()).then((data)=>{

    
const navconatin = document.createElement("div");
const city =  document.createElement("h1");
const time = document.createElement("h4");
// const searchdiv = document.createElement("div");
// const input = document.createElement("input");
// const searchBtn = document.createElement("button");



const tempbox1 = document.createElement("div");
const degree =  document.createElement("h1");
const span =  document.createElement("span");

const tempbox2 =  document.createElement("div");
const img =  document.createElement("img");
const tempdetail =  document.createElement("div");
const feelsI =  document.createElement("i");
const feels =  document.createElement("h4");
const HumidityI =  document.createElement("i");
const Humidity =  document.createElement("h4");
const windI =  document.createElement("i");
const wind =  document.createElement("h4");













// searchBtn.className = "btn btn-info"
// searchdiv.className = "search"

city.textContent = data.main.name;
time.textContent = formattedDate
// input.value = "Enter City Name"
// searchBtn.textContent = "Search"

tempbox1.className = "tempbox1"
tempbox2.className ="tempbox2"
tempdetail.className= "tempdetail"
feelsI.className="fa-solid fa-temperature-low"
HumidityI.className = "fa-solid fa-droplet"
windI.className = "fa-solid fa-wind"

degree.textContent = data.wind.deg
span.textContent = "°Deg"


img.src="https://tse2.mm.bing.net/th/id/OIP.UwBhtPfg-hASeB4_2hvNogHaF6?pid=Api&P=0&h=180"
feels.textContent = data.main.feels_like
Humidity.textContent = data.main.humidity
wind.textContent = data.wind.speed


feels.appendChild(feelsI)
Humidity.appendChild(HumidityI)
wind.appendChild(windI)

tempdetail.appendChild(feels)
tempdetail.appendChild(Humidity)
tempdetail.appendChild(wind)

tempbox2.appendChild(img)
tempbox2.appendChild(tempdetail)



degree.appendChild(span)
tempbox1.appendChild(degree)

temp.appendChild(tempbox1);
temp.appendChild(tempbox2)


navconatin.appendChild(city);
navconatin.appendChild(time);
// searchdiv.appendChild(input)
// searchdiv.appendChild(searchBtn)

nav.appendChild(navconatin)
// nav.appendChild(searchdiv)

    
})
};


searchBtn.addEventListener(('click') ,()=>{
let Weather =input.value;
displaywhether(Weather)
});

displaywhether(Weather);