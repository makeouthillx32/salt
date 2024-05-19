document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hero1');
    if (container) {
        console.log('Hero1 container found:', container);

        const dateTime = document.createElement('div');
        dateTime.className = 'date-time';
        dateTime.textContent = new Date().toLocaleString(); // Display current date and time
        container.appendChild(dateTime);

        const buttons = ['SHOP NOW', 'POLICIES', 'NEWSLETTER', 'SHOP BY COLLECTION', 'VIP MEMBERS CLUB'];
        buttons.forEach(text => {
            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = text;
            container.appendChild(button);
        });

        const socialIcons = document.createElement('div');
        socialIcons.className = 'social-icons';
        const icons = [
            { href: 'https://instagram.com', src: 'images/Insta.png', alt: 'Instagram' },
            { href: 'https://twitter.com', src: 'images/X.png', alt: 'Twitter' },
            { href: 'https://youtube.com', src: 'images/Youtube.png', alt: 'YouTube' }
        ];
        icons.forEach(icon => {
            const anchor = document.createElement('a');
            anchor.href = icon.href;
            anchor.target = '_blank';
            anchor.rel = 'noopener';
            const img = document.createElement('img');
            img.src = icon.src;
            img.alt = icon.alt;
            anchor.appendChild(img);
            socialIcons.appendChild(anchor);
        });
        container.appendChild(socialIcons);
    } else {
        console.error('Hero1 container not found');
    }
});
