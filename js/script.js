document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                navLinks.style.zIndex = '999';
            }
        });
    }

    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .step, .audience-card, .tech-item, .journey-step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Apply initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .step, .audience-card, .tech-item, .journey-step');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.padding = '20px 0';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.style.display === 'flex' && window.innerWidth <= 768) {
                    menuToggle.click();
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 