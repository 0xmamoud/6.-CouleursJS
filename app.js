const defaultColor = ["#FF5F6D", "#FFC371"];

const inputs = document.querySelectorAll("input[type=color]");
const range = document.querySelector("input[type=range]");
const body = document.querySelector("body");
const orientationValue = document.querySelector('.orientation-value');
const labels = document.querySelectorAll("div.input-group label");

body.style.background = `linear-gradient(90deg, ${inputs[0].value}, ${inputs[1].value})`;
body.addEventListener("input", updateColor);

function updateColor() {
    if(body) {
        body.style.background = `linear-gradient(${range.value}deg, ${inputs[0].value}, ${inputs[1].value})`;
        orientationValue.textContent = `${range.value}°`;
        labels[0].textContent = inputs[0].value;
        labels[1].textContent = inputs[1].value;
        
        
    }
}

const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", copyText);

function copyText() {
    const textToCopy = `linear-gradient(${orientationValue.textContent.replace("°","")}deg, ${labels[0].textContent}, ${labels[1].textContent})`
    navigator.clipboard.writeText(textToCopy)
        .then(() => console.log(`texte copier dans le papier presse: ${textToCopy}`))
        .catch(() => console.error("woops"));

}