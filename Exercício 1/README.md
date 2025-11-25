Exercicio 1

Desafio:
📝 Objetivo

Criar uma função que aceite o nome de uma pessoa como entrada e retorne uma mensagem de saudação personalizada.

📜 Instruções

1. Crie uma função em JavaScript chamada gerarSaudacao.

2. A função deve aceitar um único argumento: o nome da pessoa (uma string).

3. Dentro da função, construa e retorne uma nova string no formato:

          "Olá, [NOME]! Bem-vindo(a) ao mundo JavaScript."

4. O [NOME] deve ser substituído pelo valor passado como argumento.


📝Exemplo de Uso e Resultado Esperado

Se você chamar a função com o nome "Alexandre":

JavaScript
`
const nome1 = "Alexandre";
console.log(gerarSaudacao(nome1));
// Resultado esperado: "Olá, Alexandre! Bem-vindo(a) ao mundo JavaScript."
`*

Se você chamar a função com o nome "Mariana":

JavaScript
´
const nome2 = "Mariana";
console.log(gerarSaudacao(nome2));
// Resultado esperado: "Olá, Mariana! Bem-vindo(a) ao mundo JavaScript."
´

💡 Dicas

* => Você pode usar Template Literals (strings com crase ` `) para facilitar a concatenação e a inserção da variável. Por exemplo: `Este é o $
{variavel}`.

* => Não se esqueça da palavra-chave return para que a função devolva a string.



Forma executada:

Html:

`
<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exercício 1</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

        <h1>Exercício 1</h1>

    <section id="formulario">

        <form action="">

            <label for="nome">Nome:</label>

            <input type="text" id="nome" name="nome" required>

            <br><br>

            <button type="submit" onclick="gerarSaudacao()">Enviar</button>

        </form>

    </section>

    <script src="script.js"></script>

</body>

</html>
`

Css:
`
h1 {

    color: #333;

    text-align: center;

    font-family: Arial, sans-serif;

}

section#formulario {

    background-color: #f9f9f9;

    padding: 20px 0 20px 0;

    border-radius: 5px;

    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    text-align: center;

}
`

Java Script:

`
function gerarSaudacao() {

    const name = document.getElementById('nome').value;

    if(name === ""){

        alert("Por favor, insira seu nome.");

    } else {

        alert(`Seja bem-vindo, ${name}!`);

    }

}
`



*Correção*

Html:
`
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <h1>Exercício 1</h1>
    <section id="formulario"> 
        <form action="">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <br><br>
            <button type="button" onclick="gerarSaudacao()">Enviar</button> 
        </form>
        <section id="resultado">
            <div id="saudacao-resultado"></div>
        </section>
    </section>
    <script src="script.js"></script>
</body>
</html>
`

JavaScript:
`
function gerarSaudacao() {
    const nome = document.getElementById('nome').value;
    const elementoResultado = document.getElementById('saudacao-resultado');

    if (nome === "") {
        // Exibe a mensagem de erro no elemento de resultado
        elementoResultado.innerText = "🚨 Por favor, insira seu nome.";
        elementoResultado.style.color = 'red'; // Opcional: Estilo para erro
    } else {
        const mensagem = `Olá, ${nome}! Bem-vindo(a) ao mundo JavaScript.`;
        
        // Insere a mensagem diretamente na página
        elementoResultado.innerText = mensagem;
        elementoResultado.style.color = 'green'; // Opcional: Estilo para sucesso
    }
}
`