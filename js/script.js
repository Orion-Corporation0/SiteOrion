const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const containerCards = document.querySelector('.container-cards');
const btnDirEquipe = document.querySelector('.direita-equipe');
const btnEsqEquipe = document.querySelector('.esquerda-equipe');

btnDirEquipe.addEventListener('click', () => {
  containerCards.scrollBy({ left: 270, behavior: "smooth" });
});

btnEsqEquipe.addEventListener('click', () => {
  containerCards.scrollBy({ left: -270, behavior: "smooth" });
});

//Parte dos faq
const faqQuestions = document.querySelectorAll('.faq-questao');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});

const formulario = document.getElementById('meuFormulario');
const msgSucesso = document.getElementById('mensagem-sucesso');
const btnEnviar = document.getElementById('btnEnviar');

if (formulario) {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        btnEnviar.innerText = "Enviando...";
        btnEnviar.disabled = true;

        const dados = new FormData(formulario);

        fetch(formulario.action, {
            method: 'POST',
            body: dados,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                msgSucesso.innerText = "Mensagem enviada com sucesso!";
                msgSucesso.style.display = "block";
                
                formulario.reset();
                
                setTimeout(() => {
                    msgSucesso.style.display = "none";
                }, 3000);
            } else {
                alert("Erro ao enviar. Tente novamente.");
            }
        })
        .catch(() => {
            alert("Erro de conexão.");
        })
        .finally(() => {
            btnEnviar.innerText = "Enviar Mensagem";
            btnEnviar.disabled = false;
        });
    });
}