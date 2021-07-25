let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.querySelector("button");


function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"
}




function setRandomGradient() {
    let color1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    let color2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    body.style.background = 
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";

    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", setRandomGradient);