document.getElementById('avatar').addEventListener('change', function(event) {
    const avatarPreview = document.getElementById('avatar-preview');
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = function() {
        avatarPreview.src = reader.result;
        avatarPreview.style.display = 'block';
    }
    
    if (file) {
        reader.readAsDataURL(file);
    } else {
        avatarPreview.src = "";
        avatarPreview.style.display = 'none';
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Collect form data
    const name = document.getElementById('name').value;
    const avatar = document.getElementById('avatar').files[0];
    const username = document.getElementById('username').value;
    const travelChoice = document.getElementById('travel-choice').value;
    const foodPreference = document.getElementById('food-preference').value;
    const travelMode = document.getElementById('travel-mode').value;

    // Display profile info in a message area (You can create a real profile page here)
    const messageArea = document.getElementById('message');
    
    if (avatar) {
        const reader = new FileReader();
        reader.onload = function(event) {
            messageArea.innerHTML = `
                <h2>Profile Created!</h2>
                <img src="${event.target.result}" class="avatar" alt="Avatar" style="width: 100px; border-radius: 50%;"><br>
                <strong>Name:</strong> ${name}<br>
                <strong>Username:</strong> ${username}<br>
                <strong>Type of Travel:</strong> ${travelChoice}<br>
                <strong>Food Preference:</strong> ${foodPreference}<br>
                <strong>Preferred Travel Mode:</strong> ${travelMode}
            `;
            messageArea.style.opacity = 1;
        }

        reader.readAsDataURL(avatar);
    } else {
        messageArea.innerHTML = "<p>Please upload an avatar image.</p>";
    }
});