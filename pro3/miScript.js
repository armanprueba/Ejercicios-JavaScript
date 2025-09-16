let dni = prompt("Dame tu DNI");
let suma_numeros = 0;
let resto = 0;
let numeros = parseInt(dni.substr(0, 7));
let letra_dni = dni[8];

function comprobarDNI(){

    while(true){
        let dni = prompt("Dame tu DNI");
        
        if(dni.length != 9 || !Number.isInteger(numeros) || ){
            alert("DNI incorrecto, vuelve a introducirlo");
        } 
    }
  
}

console.log(letra_dni);
//charAt(0);//