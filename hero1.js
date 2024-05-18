document.addEventListener('DOMContentLoaded', function() {
    const hero1 = document.getElementById('hero1');
    if (hero1) {
        hero1.innerHTML = `
            <div class="date-time">${new Date().toLocaleString()}</div>
            <button class="button">SHOP NOW</button>
            <button class="button">POLICIES</button>
            <button class="button">NEWSLETTER</button>
            <button class="button">SHOP BY COLLECTION</button>
            <button class="button">VIP MEMBERS CLUB</button>
            <div class="social-icons">
                <a href="https://instagram.com" target="_blank"><img src="images/Insta.png" alt="Instagram"></a>
                <a href="https://twitter.com" target="_blank"><img src="images/X.png" alt="Twitter"></a>
                <a href="https://youtube.com" target="_blank"><img src="images/Youtube.png" alt="YouTube"></a>
            </div>
        `;
    } else {
        console.error('Hero1 container not found');
    }
});