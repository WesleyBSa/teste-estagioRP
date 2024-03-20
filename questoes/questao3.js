// Sequência a) 1, 3, 5, 7, ___
function proximoElementoA() {
    let ultimoNumero = 7; 
    let proximoNumero = ultimoNumero + 2; 
    return proximoNumero;
}

// b) 2, 4, 8, 16, 32, 64,
function proximoElementoB() {
    let ultimoNumero = 64; 
    let proximoNumero = ultimoNumero * 2; // 
    return proximoNumero;
}

// c) 0, 1, 4, 9, 16, 25, 36,
function proximoElementoC() {
    let ultimoNumero = 36; 
    let proximoNumero = Math.pow(Math.sqrt(ultimoNumero) + 1, 2); 
    return proximoNumero;
}

// d) 4, 16, 36, 64,
function proximoElementoD() {
    let ultimoNumero = 64;
    let proximoNumero = Math.pow(Math.sqrt(ultimoNumero) + 1, 2); 
    return proximoNumero;
}

// e) 1, 1, 2, 3, 5, 8,
function proximoElementoE() {
    let penultimoNumero = 5; 
    let ultimoNumero = 8;
    let proximoNumero = penultimoNumero + ultimoNumero; 
    return proximoNumero;
}

// f) 2,10, 12, 16, 17, 18, 19,
function proximoElementoF() {
    let ultimoNumero = 19;
    let proximoNumero = ultimoNumero + 1;
    return proximoNumero;
}

console.log("Próximo elemento de a):", proximoElementoA());
console.log("Próximo elemento de b):", proximoElementoB());
console.log("Próximo elemento de c):", proximoElementoC());
console.log("Próximo elemento de d):", proximoElementoD());
console.log("Próximo elemento de e):", proximoElementoE());
console.log("Próximo elemento de f):", proximoElementoF());
