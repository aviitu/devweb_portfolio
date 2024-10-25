document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card'); // Se você não tiver cards, isso não será necessário
    const form = document.querySelector('#formContato');

    // Animação de hover nas cards
    if (cards.length) {
        cards.forEach((card) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
        });
    } else {
        console.error('Nenhum card encontrado!');
    }

    // Validação do formulário e alerta de confirmação
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio do formulário

            alert('Formulário enviado com sucesso!');
            // form.submit(); // Descomente para enviar o formulário após o alerta, se necessário
        });
    } else {
        console.error('Formulário não encontrado!');
    }
});
