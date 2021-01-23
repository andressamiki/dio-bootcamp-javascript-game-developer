// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

/*

Desafio
Leonardo é um nômade digital e viaja pelo mundo programando em diferentes cafés das cidades por onde passa. Recentemente, resolveu criar um blog, para compartilhar suas experiências e aprendizados com seus amigos.

Para criação do blog, ele optou por utilizar uma ferramenta pronta, que há um limite de caracteres que se pode escrever por dia, e Leonardo está preocupado que essa limitação, afinal, irá impedir de contar suas melhores experiências. Para contornar esse problema, decidiu usar um sistema de abreviação de palavras em seus posts.

O sistema de abreviações é simples e funciona da seguinte forma: para cada letra, é possível escolher uma palavra que inicia com tal letra e que aparece no post. Uma vez escolhida a palavra, sempre que ela aparecer no post, ela será substituída por sua letra inicial e um ponto, diminuindo assim o número de caracteres impressos na tela.

Por exemplo, na frase: “hoje eu programei em Python”, podemos escolher a palavra “programei” para representar a letra ‘p', e a frase ficará assim: “hoje eu p. em Python”, economizando assim sete caracteres. Uma mesma palavra pode aparecer mais de uma vez no texto, e será abreviada todas as vezes. Note que, se após uma abreviação o número de caracteres não diminuir, ela não deve ser usada, tal como no caso da palavra “eu” acima.

Leonardo precisa que seu post tenha o menor número de caracteres possíveis, e por isso pediu a sua ajuda. Para cada letra, escolha uma palavra, de modo que ao serem aplicadas todas as abreviações, o texto contenha o menor número de caracteres possíveis.

Entrada
Haverá diversos casos de teste. Cada caso de teste é composto de uma linha, contendo uma frase de até 10⁴ caracteres. A frase é composta de palavras e espaços em branco, e cada palavra é composta de letras minúsculas ('a'-'z'), e contém entre 1 e 30 caracteres cada.

O último caso de teste é indicado quando a linha dada conter apenas um “.”, o qual não deverá ser processado.
*/

while ((frases = gets()) !== '.') {
    const frase = frases.match(/\b[a-z]{1,30}\b/g);

    const strNaoRepetidas = Array.from(frase);

    const arrObjStrings = strNaoRepetidas.map(str => {

        const strTamanho = (str.length - 2) * (frase.join(' ').match(new RegExp(`\\b${str}\\b`, 'g')).length);

        const abreviacao = str[0].concat('.');
        const titulo = abreviacao.concat(' = ').concat(str);
        const regexp = new RegExp(`\\b${str}\\b`, 'g');
        return { str, strTamanho, abreviacao, titulo, regexp }
    });

    const abreviacoes = ('abcdefghijklmnopqrstuvwxyz').split('').map(letra => {
        return arrObjStrings
            .filter(aux => aux.str.match(new RegExp(`\\b${letra}\\w{2,}\\b`, 'g')))
            .reduce((acc, curr) => curr.strTamanho >= acc.strTamanho ? curr : acc, { strTamanho: 0 });
    }).filter(el => el.strTamanho > 0) 
    for (const abrev of abreviacoes) frases = frases.replace(abrev.regexp, abrev.abreviacao);
    console.log(frases + '\n' + abreviacoes.length);
    abreviacoes.sort().map(({ titulo }) => console.log(titulo));
}