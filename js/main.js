// Main JavaScript file for jakesonderman.com

// Mobile menu toggle (if needed in future)
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('Jake Sonderman website loaded');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

