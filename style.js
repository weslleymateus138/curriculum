document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

document.querySelector(".email").addEventListener("click", function(event) {
            event.preventDefault();
            navigator.clipboard.writeText(this.textContent).then(() => {
                alert("Email copiado para a área de transferência: " + this.textContent);
            }).catch(err => {
                console.error("Erro ao copiar o email: ", err);
            });
        });
