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