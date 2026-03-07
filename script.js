// Lógica dos Filtros
const filterBtns = document.querySelectorAll('.filter-btn');
const sourceCards = document.querySelectorAll('.source-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove classe ativa de todos e adiciona no clicado
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Mostra/Esconde os cards baseado na categoria
        sourceCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Lógica do Accordion (Expandir/Retrair Cards)
const cardHeaders = document.querySelectorAll('.card-header');

cardHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.toggle-icon');
        
        // Alterna a classe 'open' no conteúdo
        content.classList.toggle('open');
        
        // Muda o ícone de + para -
        if (content.classList.contains('open')) {
            icon.textContent = '−';
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.textContent = '+';
            icon.style.transform = 'rotate(0deg)';
        }
    });
});