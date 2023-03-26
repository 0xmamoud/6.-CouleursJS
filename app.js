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
        .then(() => {
            copyBtn.style.backgroundColor = "#FFD151";
            copyBtn.textContent = "copie ok!"
            setTimeout(() => {
                copyBtn.textContent = "Copier"
                copyBtn.style.backgroundColor = "";
              }, 2000);
            console.log(`texte copier dans le papier presse: ${textToCopy}`)})
        .catch(() => console.error("woops"));

}


const randomBtn = document.querySelector(".random-btn");

randomBtn.addEventListener("click", handleRandom);

function handleRandom() {

    for (let i = 0; i < inputs.length; i++) {
        const inputColor = getRandomColor();
        inputs[i].value = inputColor;
        labels[i].textContent = inputs[i].value;
        // console.log(inputs[i].value);
    }

    const degre = getRandomDegre();
    orientationValue.textContent = degre;
    // console.log(degre);
    body.style.background = `linear-gradient(${degre}deg, ${inputs[0].value}, ${inputs[1].value})`;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

      const hexadecimal = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
    return hexadecimal;
}

function getRandomDegre() {
    const deg = Math.floor(Math.random() * 361);
    return deg;
}