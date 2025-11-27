function verificarIdade() {
    const idade = Number(document.getElementById('idade').value)
    if (idade === 0 || idade < 0 || isNaN(idade)){
        document.getElementById('resultado').innerText = "⚠️ Por favor, insira sua idade ou um valor válido. ⚠️"
    }else{
        if(idade >= 18){
            document.getElementById('resultado').innerText = "✅ Maior de idade. Acesso liberado. ✅"
        }else{
            document.getElementById('resultado').innerText = "🛑 Menor de idade. Acesso restrito. 🛑"
        }
    }
}