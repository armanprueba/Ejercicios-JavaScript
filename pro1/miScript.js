let hola2 = document.getElementById("hola2");
let big_shot = prompt("Hola clase, ¿cómo se llama este Big Shot?");
let imagen = document.getElementById("imagen");

console.log(big_shot);
if(!big_shot || big_shot === " "){
    hola2.textContent = "Seguimos sin Big Shot";
    console.log(big_shot.split(" "));
    imagen.classList.remove('img_hover');
}
else {
    hola2.textContent = big_shot + " es nuestro Big Shot";
}


//APUNTES DE CLASE
//Las variables no pueden empezar por números