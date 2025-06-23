document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const body = document.body;
    let isMenuOpen = false;

    // Toggle Menu Function
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        body.style.overflow = isMenuOpen ? 'hidden' : '';
        // Tambahan: pastikan nav-links tampil flex di mobile saat open
        if (window.innerWidth <= 900) {
            if (isMenuOpen) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = '';
            }
        }
        // Add animation to nav links
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach((item, index) => {
            if (isMenuOpen) {
                item.style.transitionDelay = `${0.1 * index}s`;
            } else {
                item.style.transitionDelay = '0s';
            }
        });
    }

    // Close Menu Function
    function closeMenu() {
        if (isMenuOpen) {
            isMenuOpen = false;
            menuToggle.classList.remove('active');
            navLinks.classList.remove('open');
            body.style.overflow = '';
            // Reset display style
            if (window.innerWidth <= 900) {
                navLinks.style.display = '';
            }
            // Reset transition delays
            const navItems = navLinks.querySelectorAll('a');
            navItems.forEach(item => {
                item.style.transitionDelay = '0s';
            });
        }
    }

    // Event Listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu when clicking nav links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Close menu on resize if open
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900 && isMenuOpen) {
                closeMenu();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        });
    }

    // Dark Mode Toggle
    const modeToggle = document.getElementById('modeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function setMode(isDark) {
        const icon = modeToggle.querySelector('i');
        if (isDark) {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    }

    if (modeToggle) {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
            setMode(true);
        }

        modeToggle.addEventListener('click', () => {
            setMode(!body.classList.contains('dark-mode'));
        });

        // Listen for system theme changes
        prefersDarkScheme.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setMode(e.matches);
            }
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Scroll Effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            return;
        }
        
        if (currentScroll > lastScroll && !isMenuOpen) {
            // Scrolling down & menu is closed
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up or menu is open
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

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
}); 