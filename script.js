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
        
        // Dark Mode Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        // Check for saved theme or prefer-color-scheme
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
        
        // Set initial theme
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        // Toggle theme
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.querySelector('.nav-links');
        const mobileMenuIcon = mobileMenuBtn.querySelector('i');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-times');
            } else {
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            }
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