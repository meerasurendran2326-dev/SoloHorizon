// Modal Open and Close
function openModal() {
    document.getElementById('signInModal').style.display = "block";
}

function closeModal() {
    document.getElementById('signInModal').style.display = "none";
}

// Smooth Scroll Navigation
const links = document.querySelectorAll('.menu-btn');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});

// Change Background Color based on Time of Day
function changeBackgroundColor() {
    const currentHour = new Date().getHours();
    const body = document.body;
    if (currentHour >= 18 || currentHour < 6) {
        body.style.backgroundColor = '#1b1b1b'; // Dark theme for night
    } else {
        body.style.backgroundColor = '#800080'; // Lighter theme for day
    }
}
changeBackgroundColor();
