let form = document.getElementById("form");
let word = document.getElementById("word");
let letter = document.getElementById("letter");
let lifes = document.getElementById("lifes");


secondForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (word.length > 10 || typeof(word) != "string") {
            alert("Palabra no valida");
    }
});


