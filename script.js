// Intersection Observer for Zuko-style Reveal Animations
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => revealObserver.observe(el));

    // Mobile Menu Toggle — controls the overlay outside the navbar
    const menuToggle = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    const overlayLinks = document.querySelectorAll('#mobile-overlay a');

    if (menuToggle && overlay) {
        menuToggle.addEventListener('click', () => {
            const isOpen = overlay.classList.toggle('nav-active');
            menuToggle.classList.toggle('is-active');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        overlayLinks.forEach(link => {
            link.addEventListener('click', () => {
                overlay.classList.remove('nav-active');
                menuToggle.classList.remove('is-active');
                document.body.style.overflow = '';
            });
        });
    }

    // Scroll To Top Button
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
