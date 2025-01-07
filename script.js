// Smooth Scrolling
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Typewriter Effect
const text = "Full Stack Web and App Developer | Data Analyst | Cloud Practitioner";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('typewriter').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;
