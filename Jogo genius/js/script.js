let order = []; /* array vazio - São as ordens do jogo aleatoriamente */
let clickedOrder = []; /*Ordem dos clicks*/
let score = 0; /*conta os score do jogo*/

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

/*CHAMA AS CLASSES CRIADAS NO CSS*/
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


/**FUNCAO QUE SORTEIA NUMEROS EM ORDEM ALEATORIA - CRIA ORDEM ALEATÓRIA DE CORES */

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); // Variavel que guarda um numero a cada rodada.
    order[order.length] = colorOrder; //atribui o numero gerado à próxima ordem
    clickedOrder = [];

    //acende a cor que corresponde ao número sorteado
    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// ACENDE A PROXIMA COR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

/**COMPARA SE A ORDEM CLICADA É A MESMA ORDEM QUE O JOGO NOS DEU ANTES*/

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert('Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!');
        nextLevel();
    }
}

//FUNCAO PARA O CLICK DO JOGADOR

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}


//FUNCAO QUE RETORNA A COR

let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// FUNCAO PARA O PROXIMO NIVEL DO JOGO

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//FUNCAO PARA GAME OVER

let gameOver = () => {
    alert('Pontuação: ${score}\nVocê perdeu o jogo\nClique em OK para iniciar um novo jogo');
    order = [];
    clickedOrder = [];

    playGame();
}

//FUNCAO DE INICIO DO JOGO

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//EVENTO DE CLIQUE PARA AS CORES

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//INICIO DO JOGO
playGame();


/*
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
*/