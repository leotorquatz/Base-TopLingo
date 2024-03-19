function toggleBackground() {
    var body = document.querySelector('body');
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'white';
    }
    baixo.style.color = currentBackgroundColor === 'white' ? 'black' : 'white';
}


const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

inputText.addEventListener('input', function() {
    outputText.textContent = inputText.value;
});