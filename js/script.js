 const navLinks = document.querySelectorAll('.nav-link');
        const navMenu = document.getElementById('navMenu');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    const bsCollapse = new bootstrap.Collapse(navMenu, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            });
        });
        const items = document.querySelectorAll('section, .timeline-item');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeUp 1s ease forwards';
                }
            });
        });

        items.forEach(item => observer.observe(item));
        // Contact form alert on submit
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload stop

  alert("Thank you! Your message has been sent successfully.");

  contactForm.reset(); // form clear
});
