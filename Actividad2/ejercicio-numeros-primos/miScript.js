let numerosPrimosMenores = [];

function primosMenores(numero) {
    let primo = 0;
    for(let i = 0; i<numero; i++){
        let primo = 0;
        for(let j = 0; j<=i; j++){
            if(i%j === 0){
            primo++;
        }  
        if(primo === 2){
            numerosPrimosMenores += i;
        }

        }
        
    }
    return numerosPrimosMenores;

}

console.log(primosMenores(5));
