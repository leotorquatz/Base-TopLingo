function toggleBackground() {
    var body = document.querySelector('body');
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'white';
    }
}
