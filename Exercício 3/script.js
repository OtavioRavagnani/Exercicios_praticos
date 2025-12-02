function analisarTurma() {
    // Passo 1: Captura e Preparação
    const notasString = document.getElementById('notas').value;
    const notasArray = notasString.split(','); // Ex: ["7.5", "8.0", "6.0", "9.5"]

    // Passo 2: Inicializando acumuladores
    let somaNotas = 0;
    let aprovados = 0;
    const totalAlunos = notasArray.length; // Quantos itens no array

    // O LAÇO 'FOR'
    for (let i = 0; i < totalAlunos; i++) {
        // 1. Acessa a nota atual usando o índice [i]
        const notaStringAtual = notasArray[i]; // Ex: "7.5" na 1ª volta

        // 2. Converte para número (crucial!)
        const notaNumerica = Number(notaStringAtual); // Ex: 7.5

        // 3. Soma a nota (acumula o total)
        somaNotas = somaNotas + notaNumerica; // ou: somaNotas += notaNumerica;

        // 4. Verifica a condição de aprovação
        if (notaNumerica >= 7.0) {
            aprovados++; // ou: aprovados = aprovados + 1;
        }
    }
    
    const media = somaNotas / totalAlunos;
    const resultado = 
        `Média da turma: ${media.toFixed(2)}\n` +
        `Total de alunos: ${totalAlunos}\n` +
        `Alunos aprovados: ${aprovados}\n` +
        `Alunos reprovados: ${totalAlunos - aprovados}`;;

    document.getElementById('relatorio').innerText = resultado;

    // O restante do seu código (Passo 3 e 4) deve vir aqui, fora do laço!
    // Ex: const media = somaNotas / totalAlunos;
}