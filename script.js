const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
    });
});

const hero = document.querySelector('.section-hero');
const heroBg = document.createElement('div');
heroBg.classList.add('hero-bg');
for (let i = 0; i < 5; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    heroBg.appendChild(shape);
}
hero.prepend(heroBg);

const ring = document.createElement('div');
ring.classList.add('hero-ring');
hero.appendChild(ring);

const ring2 = document.createElement('div');
ring2.classList.add('hero-ring-2');
hero.appendChild(ring2);

const glow = document.createElement('div');
glow.classList.add('hero-glow');
hero.appendChild(glow);

const about = document.querySelector('.section-about');
const aboutLines = document.createElement('div');
aboutLines.classList.add('about-lines');
for (let i = 0; i < 4; i++) {
    const line = document.createElement('div');
    line.classList.add('about-line');
    aboutLines.appendChild(line);
}
about.prepend(aboutLines);

const services = document.querySelector('.section-services');
const servicesSweep = document.createElement('div');
servicesSweep.classList.add('services-sweep');
for (let i = 0; i < 3; i++) {
    const bar = document.createElement('div');
    bar.classList.add('sweep-bar');
    servicesSweep.appendChild(bar);
}
services.prepend(servicesSweep);

const servicesDots = document.createElement('div');
servicesDots.classList.add('services-dots');
for (let i = 0; i < 6; i++) {
    const dot = document.createElement('div');
    dot.classList.add('s-dot');
    servicesDots.appendChild(dot);
}
services.appendChild(servicesDots);

const portfolio = document.querySelector('.section-portfolio');
const portfolioCorners = document.createElement('div');
portfolioCorners.classList.add('portfolio-corners');
for (let i = 0; i < 4; i++) {
    const corner = document.createElement('div');
    corner.classList.add('corner-shape');
    portfolioCorners.appendChild(corner);
}
for (let i = 0; i < 2; i++) {
    const fl = document.createElement('div');
    fl.classList.add('portfolio-float-line');
    portfolioCorners.appendChild(fl);
}
portfolio.prepend(portfolioCorners);

const contact = document.querySelector('.section-contact');
const contactRipples = document.createElement('div');
contactRipples.classList.add('contact-ripples');
for (let i = 0; i < 4; i++) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    contactRipples.appendChild(ripple);
}
for (let i = 0; i < 4; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('contact-sparkle');
    contactRipples.appendChild(sparkle);
}
contact.prepend(contactRipples);
