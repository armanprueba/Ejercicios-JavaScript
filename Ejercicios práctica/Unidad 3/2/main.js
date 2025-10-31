let div = document.querySelector("div#lipsum")
let primerParrafo = div.firstElementChild;
let segundoParrafo = primerParrafo.nextElementSibling
let ultimoParrafo = div.lastElementChild;
let lipsum = document.querySelectorAll("#lipsum p");
let form =  document.querySelector("form");
let inputSexo =  document.querySelectorAll('input[name="sexo"]');
let inputs =  document.getElementsByTagName("input");

let important_li = document.querySelectorAll("li.important")

console.log(div);
console.log(primerParrafo);
console.log(segundoParrafo);
console.log(ultimoParrafo);






/* https://stackoverflow.com/questions/12048273/selecting-second-children-of-first-div-children-in-javascript */