let text = prompt('Измените текст ссылки');
const elem = document.querySelector('#text');
elem.textContent = text;
text.oncontextmenu = function(event) {
    event.preventDefault();
 }
 console.log('новое значение:' + text);