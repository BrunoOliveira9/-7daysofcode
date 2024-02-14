
    function exibirMensagem() {
        // Obter os valores inseridos pelo usuário
        var nome = document.getElementById("nome").value;
        var idade = document.getElementById("idade").value;
        var linguagem = document.getElementById("linguagem").value;

        // Exibir a mensagem final
        alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

        

        // perguntando se gosta de estudar a linguagem
        var resposta = prompt("Você gosta de estudar " + linguagem + "? Responda com sim ou não.");
            
        
        if (resposta === "sim") {
            alert("Que legal que você gosta de estudar " + linguagem + "!");
        } else if (resposta === "não") {
            alert("Ah, que pena que você não gosta de estudar " + linguagem + ". Talvez possa encontrar outra linguagem");
        
        }

    }