// Generate flying hearts
function createHearts() {
    const heartCount = 20; // Number of hearts
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5-10s
        heart.style.animationDelay = `${Math.random() * 5}s`; // Random delay
        document.body.appendChild(heart);

        // Remove heart after animation to prevent DOM clutter
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Create hearts initially and every 5 seconds
createHearts();
setInterval(createHearts, 5000);

// Existing code (e.g., form submission, smooth scrolling, theme toggle) remains unchanged