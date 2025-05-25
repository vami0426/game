
function showPopup(description, imageName) {
    document.getElementById('description').innerText = description;
    document.getElementById('taskImage').src = imageName;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
