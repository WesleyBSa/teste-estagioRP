function findout() {
    let sala1 = {
        lampada: false 
    };
    let sala2 = {
        lampada: false
    };

    console.log("Ligando o 1° interruptor.");
    setTimeout(() => {
        console.log("Desligando o 1° interruptor.");
    
        console.log("Ligando o 2° interruptor || Verificando na sala 1.");
        sala1.lampada = true; 
        console.log("Verificando se a lâmpada da sala 1 está acesa.");
        if (sala1.lampada) {
            console.log("A lâmpada na sala 1 está acesa. Sendo assim, o 1° interruptor controla essa lâmpada.");
        } else {
            console.log("A lâmpada na sala 1 está apagada. Sendo assim, o 2° interruptor controla essa lâmpada.");
        }

        console.log("Ligando o 3° interruptor || Verificando na sala 2");
        sala2.lampada = true;
        console.log("Verificando se a lâmpada da sala 2 está acesa.");
        if (sala2.lampada) {
            console.log("A lâmpada na sala 2 está acesa. Sendo assim, o 2° interruptor controla essa lâmpada.");
        } else {
            console.log("A lâmpada na sala 2 está apagada. Sendo assim, o 3° interruptor controla essa lâmpada.");
        }
    }, 1000); 
}

findout();
