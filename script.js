//Exibe uma mensagem no console do navegador
// Usado para testes e para confirmar se o JS foi carregado corretamente
console.log("Currículo carregado com sucesso!");

/* botão modo escuro */

//Seleciona o botão pelo ID Definido no HTML (id = "darkModeBtn")
//Essa variavel representa o botão da página
const button = document.getElementById("darkModeBtn");

//Adiciona um "ouvinte de evento" ao botão
//Ele fica aguardando o usuario clicar
button.addEventListener("click", () => {

    // Alterna a classe "dark-mode" no body
    // Se tiver a classe → remove
    // Se não tiver → adiciona
    document.body.classList.toggle("dark-mode");

    // Verifica se o body CONTÉM a classe "dark-mode"
    if (document.body.classList.contains("dark-mode")) {        
        
        // Se estiver no modo escuro,
        // muda o texto do botão para "Modo claro"
        button.textContent = "☀️ Modo claro";
    } else {

        // Se estiver no modo claro,
        // muda o texto do botão para "Modo escuro"
        button.textContent = "🌙 Modo escuro";
    }
});
