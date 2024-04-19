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

function openWhatsApp() {
    const number = "9779844131555";
    const url = `https://wa.me/${number}`;
    window.open(url, "_blank");
}

function openSocialMedia(platform) {
    const urls = {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    };
    const url = urls[platform]; 
    if (url) {
    window.open(url, "_blank"); 
    } else {
    console.log("Invalid URL");
    }
}

function downloadCV() {
    const cvURL = "/Assets/Resume.pdf";
    
    const downloadLink = document.createElement("a");
    downloadLink.href = cvURL;
    downloadLink.download = "bedagya.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

const skillBars = document.querySelectorAll(".skill-bar");

skillBars.forEach((skillBar) => {
    const skillLevel = skillBar.dataset.skillLevel;
    skillBar.style.width = `${skillLevel}%`;
});

window.addEventListener('scroll', handleScroll);

handleScroll();