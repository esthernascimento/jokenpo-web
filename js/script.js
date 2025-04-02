let pontosJogador = 0;
let pontosComputador = 0;

function verificarIdade() {
    const idade = document.getElementById('idade').value;
    
    if (idade >= 18) {
        document.getElementById('idade-form').style.display = 'none';
        document.getElementById('jogo').style.display = 'block';
    } else {
        alert('Você precisa ter 18 anos ou mais para jogar.');
    }
}

function jogar(escolhaJogador) {
    const escolhas = {
        1: "Pedra",
        2: "Papel",
        3: "Tesoura"
    };
    
    const escolhaComputador = Math.floor(Math.random() * 3) + 1;
    
    // Determina o resultado
    let resultado;
    if (escolhaJogador === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaJogador === 1 && escolhaComputador === 3) ||  
        (escolhaJogador === 2 && escolhaComputador === 1) || 
        (escolhaJogador === 3 && escolhaComputador === 2)    
    ) {
        resultado = "Você ganhou!";
        pontosJogador++; // Incrementa a pontuação do jogador
    } else {
        resultado = "Você perdeu!";
        pontosComputador++; // Incrementa a pontuação do computador
    }
    
    // Verifica se alguém atingiu 3 pontos
    if (pontosJogador === 3) {
        document.getElementById('resultado').innerHTML = `
            <h3>Parabéns!</h3>
            <p>Você venceu o jogo com 3 pontos!</p>
        `;
        resetarJogo();
        return;
    } else if (pontosComputador === 3) {
        document.getElementById('resultado').innerHTML = `
            <h3>Que pena!</h3>
            <p>O computador venceu o jogo com 3 pontos!</p>
        `;
        resetarJogo();
        return;
    }
    
    // Exibe o resultado da rodada
    document.getElementById('resultado').innerHTML = `
        <h3>Resultado:</h3>
        <p>Você escolheu: ${escolhas[escolhaJogador]}</p>
        <p>Computador escolheu: ${escolhas[escolhaComputador]}</p>
        <p><strong>${resultado}</strong></p>
        <p>Pontuação: Você ${pontosJogador} x ${pontosComputador} Computador</p>
    `;
}

// Função para resetar o jogo
function resetarJogo() {
    pontosJogador = 0;
    pontosComputador = 0;
    alert("O jogo foi reiniciado. Boa sorte!");
}