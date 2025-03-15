document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden"); // Seleciona todos os elementos com a classe "hidden"

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) { 
                entry.target.classList.add("show"); // Adiciona a classe visível
                observer.unobserve(entry.target); // Para de observar após a exibição (opcional)
            }
        });
    }, { threshold: 0.2 }); // Define que 20% do elemento precisa estar visível

    elements.forEach((el) => observer.observe(el)); // Inicia a observação
});
