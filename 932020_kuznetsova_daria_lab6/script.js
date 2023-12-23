function hidePicture(picture) {
    let pic = document.getElementsByClassName(picture)[0];
    pic.classList.add('hidden');
}

function showPicture(picture) {
    let pic = document.getElementsByClassName(picture)[0];
    pic.classList.remove('hidden');
}