// 1. Sticky Navbar Logic
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Change icon between Moon and Sun
    if (document.body.classList.contains('light-mode')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

// 3. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// 4. Load Saved Preference on Page Load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.textContent = '☀️';
    }
};