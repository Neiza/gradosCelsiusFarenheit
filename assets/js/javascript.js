
function convertirCelsius() {
        var f = (document.getElementById('fahrenheit').value - 32) * 5/9;
        document.getElementById('celsius').value = Math.round(f);
}
function convertirFahrenheit() {
        var c = (5/9 * document.getElementById('celsius').value) + 32;
        document.getElementById('fahrenheit').value = Math.round(c);
}
