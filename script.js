function handleScroll() {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();
