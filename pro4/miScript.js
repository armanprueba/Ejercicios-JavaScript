

function adivinaNumero(){
    do{
        let bucle = true
        let num_aleatorio = Math.floor(Math.random() * (100 - 1) + 1);
        let prompt = prompt("Adivina un número del 1 al 100");
        if(num_aleatorio == prompt){
            bucle = false;
        }
    }
    while(bucle)
}


adivinaNumero();