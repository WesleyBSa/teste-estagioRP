function vFibonacci(numero) {
    let anterior = 0;
    let atual = 1;
    
    while (atual <= numero) {
        if (atual === numero) {
            return true;
        }
        
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    
    return false;
}


let numeroInfo = 89;  //informe o número aqui! 

if (vFibonacci(numeroInfo)) {
    console.log(numeroInfo + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInfo + " não pertence à sequência de Fibonacci.");
}
