//muda o tema do site
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio do formulário

        // Captura os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const idade = document.getElementById('idade').value;
        const comentario = document.querySelector('textarea').value;

        // Armazena os dados em um array
        const userData = [nome, email, idade, comentario];

        // Exibe os dados no console (ou faça o que precisar com os dados)
        console.log(userData);
        
        // Para exibir os dados na página, se desejado
        alert('Obrigado por nos contactar!!');
    });
});

function adjustFontSize(change) {
    let content = document.querySelector('main');
    let style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    content.style.fontSize = (currentSize + change) + 'px';
}
