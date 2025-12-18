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

// Smart dark mode: auto-detect + manual control
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const userPreference = localStorage.getItem('theme-preference');

function applyTheme() {
    if (userPreference === 'dark' || (userPreference === null && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

applyTheme();

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    
    if (isDark) {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme-preference', 'light');
    } else {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme-preference', 'dark');
    }
});

prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme-preference')) {
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

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const mobileMenuIcon = mobileMenuBtn.querySelector('i');

if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-times');
        } else {
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
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
            // Close mobile menu if open
            if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            }
            
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

// Close menu when clicking outside (mobile)
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && navLinks && mobileMenuBtn) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        }
    }
});