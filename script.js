var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var div = document.getElementById('button-holder');

var buttonColorGenerator = function() {
    var button = document.createElement('button');
    button.innerHTML = "Button generator";
    button.style.color = '#ffffff';
    button.style.background = 'orange';
    button.style.width = "30vh";
    button.style.minHeight = "50px";
    button.style.marginTop = "15px";
    div.appendChild(button);
}

function randomColorInputs() {
    body.style.background = `linear-gradient(to right, rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}), rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}))`;

    css.textContent = body.style.background + ';';
}

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ';';
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
var btn;
addEventListener('load', () => {
    buttonColorGenerator();
    setGradient();
    btn = document.querySelector('button');
    btn.addEventListener('click', randomColorInputs);
});