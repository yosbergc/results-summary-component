const file = 'data.json';
window.addEventListener('load', obtenerDatos);
function obtenerDatos() {
const reactionObtained = document.querySelector(".reactionObtained");
const memoryObtained = document.querySelector(".memoryObtained");
const verbalObtained = document.querySelector(".verbalObtained");
const visualObtained = document.querySelector(".visualObtained");
fetch(file).then(response => {
    if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
    }
    return response.json();
})
.then(data => {
    reactionObtained.innerHTML = data[0].score;
    memoryObtained.innerHTML = data[1].score;
    verbalObtained.innerHTML = data[2].score;
    visualObtained.innerHTML = data[3].score;
})
}
