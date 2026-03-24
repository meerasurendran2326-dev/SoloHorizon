document.getElementById('travel-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('user-name').value;
    const experience = document.getElementById('user-experience').value;
    const image = document.getElementById('user-image').files[0];

    if (name && experience && image) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const experiencesGallery = document.getElementById('experiences-gallery');
            const experienceCard = document.createElement('div');
            experienceCard.classList.add('experience-card');
            experienceCard.innerHTML = `
                <h3>${name}</h3>
                <p>${experience}</p>
                <img src="${e.target.result}" alt="${name}'s travel photo" style="width:100%; border-radius:5px;">
            `;

            experiencesGallery.appendChild(experienceCard);
            document.getElementById('travel-form').reset();
        };

        reader.readAsDataURL(image);
    }
});