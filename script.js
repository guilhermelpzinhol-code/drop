// Script para o contador de urgência dinâmico
function updateStockCount(count) {
    const stockCountElement = document.getElementById('stock-count');
    if (stockCountElement) {
        stockCountElement.textContent = count;
    }
}

// Inicia o contador em 16
window.addEventListener('load', () => {
    setTimeout(() => updateStockCount(14), 15000); // 15 segundos -> 14
    setTimeout(() => updateStockCount(13), 25000); // 25 segundos -> 13
    setTimeout(() => updateStockCount(7), 60000);  // 60 segundos -> 7
});

// Script para o efeito de Scroll-Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// Para revelar elementos que já estão na tela no carregamento
reveal(); 

// Script do Acordeão (FAQ)
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const content = currentItem.querySelector('.accordion-content');
            const isActive = currentItem.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
                item.querySelector('.accordion-header').classList.remove('active');
            });

            if (!isActive) {
                currentItem.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                this.classList.add('active');
            }
        });
    });
});