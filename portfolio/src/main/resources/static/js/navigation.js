function initNavigation() {

    document.querySelectorAll('.nav-links a:not(.download-btn)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                const headerHeight = document.querySelector('.sidebar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 34;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a:not(.download-btn)');

    function setActiveLink() {
        let current = '';
        sections.forEach(section => {
            if (window.pageYOffset >= (section.offsetTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
}

function initSocialButtons() {
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-3px)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0)');
    });
}