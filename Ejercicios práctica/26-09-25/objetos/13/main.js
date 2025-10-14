let alumnado = [
  { nombre: "Sara", edad: 19 },
  { nombre: "Pepe", edad: 61 },
  { nombre: "Lara", edad: 24 },
  { nombre: "Álex", edad: 17 },
  { nombre: "Inés", edad: 31 }
];

let ordenaEdad = alumnado.sort(function(alumnado, alumnado2) {
  return alumnado.edad - alumnado2.edad;
});

let ordenaNombre = alumnado.sort((alumnado, alumnado2) => alumnado.nombre.localeCompare(alumnado2.nombre));

/*let ordenaNombre = alumnado.sort(function(alumnado, alumnado2) {
  return alumnado.nombre.localeCompare(alumnado2.nombre);
});*/

console.log(ordenaEdad);
console.log(ordenaNombre);



