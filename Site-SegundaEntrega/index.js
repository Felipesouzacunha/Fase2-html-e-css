function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Array de nomes
const nomes = ["Peter", "Vander", "Douglas", "Roger", "Jorge", "Felipe", "Simone"];

// Preenche o select de nomes
const selectNome = document.getElementById("nomes");
cidades.forEach(nome => {
    const option = document.createElement("option");
    option.value = nome;
    option.text = nome;
    selectNome.appendChild(option);
});

// Valida o email
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    if (!validacaoEmail(email)) {
        alert("Email inválido!");
        return;
    }

    // Armazena os dados do formulário em um array
    const dados = {
        nome: document.getElementById("nome").value,
        email: email,
        
    };

    // Processa ou armazena os dados do formulário (ex: salvar em banco de dados)
    console.log("Dados do formulário:", dados);
});

// Função de validação de email (simplificada)
function validacaoEmail(email) {
    return /^[\w-.]+@([\w-.]+)\.[^.]+$/.test(email);
}

function adjustFontSize(change) {
    let content = document.querySelector('#a');
    let style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    content.style.fontSize = (currentSize + change) + 'px';
}
