const next = document.getElementById("next");
const prev = document.getElementById("prev");
const auto = document.getElementById("auto");
const img = document.getElementById("img")
const stop = document.getElementById("stop")

let id;

const images = [
    "https://tse4.mm.bing.net/th/id/OIP.zvTH42gSclJtNydj25IWbAHaE7?pid=Api&P=0&h=180",
"https://wallpapercave.com/wp/wp2722928.jpg"  ,
  "https://picjumbo.com/wp-content/uploads/beautiful-nature-scenery-free-photo-2210x1473.jpg",
    "https://wallpapercave.com/wp/wp2665214.jpg",
];

let index = 0;

function showImages() {
    img.src = images[index];
};

function nextImages() {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = images[index];
    showImages();
};

function previousImages() {
    if (index > 0) {
        index--;
    }
    else {
        index = images.length - 1;
    }
    img.src = images[index];
    showImages();
};

function autoPlay() {
     id=setInterval(() => {
        if (index < images.length - 1) {
            index++;
        } else {
            index = 0;
        }
        img.src = images[index];
        showImages();
    }, 1000)
};

function stopAutoPlay(){
   clearInterval(id);
}


next.addEventListener("click", () => {
    nextImages();
});
prev.addEventListener("click", () => {
    previousImages();
});
auto.addEventListener("click", () => {
    autoPlay();
});
stop.addEventListener("click", () => {
    stopAutoPlay();
});
showImages(index);
