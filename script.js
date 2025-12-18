// Typing Effect with Multiple Words
const typingText = document.getElementById('typingText');
const words = ["Product Manager", "Jira", "Trello", "Asana"];
let wordIndex = 0;
let charIndex = 0;
let isTyping = true;
let isDeleting = false;
let typingSpeed = 100;
let deleteSpeed = 50;
let pauseTime = 1500;

function typeText() {
    const currentWord = words[wordIndex];
    
    if (isTyping && !isDeleting) {
        // Typing forward
        if (charIndex < currentWord.length) {
            typingText.textContent += currentWord.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Finished typing word
            isDeleting = true;
            setTimeout(typeText, pauseTime);
        }
    } else if (isDeleting) {
        // Deleting backward
        if (charIndex > 0) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, deleteSpeed);
        } else {
            // Finished deleting, move to next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeText, 500);
        }
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 1000);
});
        
        // Fix dark mode for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme or system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // Set initial theme - important for mobile
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else if (prefersDarkScheme.matches) {
        // System preference only if no saved preference
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
    
    // Toggle theme function - mobile optimized
    function toggleDarkMode() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // Add event listener - use touch events for mobile
    themeToggle.addEventListener('click', toggleDarkMode);
    themeToggle.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Prevent double tap zoom
        toggleDarkMode();
    }, { passive: false });
    
    // Listen for system theme changes (mobile)
    prefersDarkScheme.addEventListener('change', (e) => {
        const currentSavedTheme = localStorage.getItem('theme');
        if (!currentSavedTheme) { // Only apply system change if no user preference
            if (e.matches) {
                document.body.classList.add('dark-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                document.body.classList.remove('dark-mode');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    });
});
           
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            });
        });
        
        // Form submission
        contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    if (name && email && message) {
        const mailtoLink = `mailto:abuopearl@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`;
        window.location.href = mailtoLink;
        contactForm.reset();
    } else {
        alert('Please fill in all required fields (Name, Email, Message).');
    }
});
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                if (document.body.classList.contains('dark-mode')) {
                    header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
                }
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                if (document.body.classList.contains('dark-mode')) {
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
                }
            }
        });
        
        // Skill level animation on scroll
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        
        // Observe skill categories for animation
        document.querySelectorAll('.skill-category').forEach(category => {
            observer.observe(category);
        });
        // Fix mobile navigation scrolling
document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const homeSection = document.getElementById('home');
        if (homeSection) {
            if (window.innerWidth <= 768) { // Mobile check
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            }
            window.scrollTo({
                top: homeSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Mobile fixes for dark mode and navigation
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. FIX DARK MODE TOGGLE
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Set initial theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Mobile-optimized toggle
    themeToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        
        const isDark = document.body.classList.toggle('dark-mode');
        
        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // 2. FIX LOGO NAVIGATION ON MOBILE
    const homeLinks = document.querySelectorAll('a[href="#home"]');
    
    homeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) {
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
            
            // Scroll to home section
            const homeSection = document.getElementById('home');
            if (homeSection) {
                window.scrollTo({
                    top: homeSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 3. FIX MOBILE MENU TOGGLE (if not working)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = mobileMenuBtn.querySelector('i');
        
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking links
        document.querySelectorAll('.nav-links a').forEach(navLink => {
            navLink.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }
});