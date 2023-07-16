var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);
var contadorAciertos = 0;
var contadorFallos = 0;
var contadorIntentos = 0;
var segundos = 0;
var minutos = 0;
var segundosTexto;
var minutosTexto;

var actualizoContador = function actualizarContador() {
    
    segundos = segundos + 1;
    if (segundos > 59) {
        segundos = 0;
        minutos = minutos + 1;
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
        segundosTexto = '0' + segundos;
    }
    if (minutos < 10) {
        minutosTexto = '0' + minutos;
    }

    document.querySelector('#minutos').innerHTML = minutosTexto;
    document.querySelector('#segundos').innerHTML = segundosTexto;

    cronometro = setInterval(actualizoContador, 1000,);
}