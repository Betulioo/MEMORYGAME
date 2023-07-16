function acierto(lasTarjetas) {

  var aciertos = document.querySelector('#contadorAciertos');
  var intentos = document.querySelector('#contadorIntentos');

  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");

  });
  contadorAciertos += 1;
  contadorIntentos += 1;

  aciertos.textContent = `Aciertos: ${contadorAciertos}`;
  intentos.textContent = `Intentos: ${contadorIntentos}`;
}

function error(lasTarjetas) {

  var errores = document.querySelector('#contadorError');
  var intentos = document.querySelector('#contadorIntentos');

  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");

  });

setTimeout(function() {

        lasTarjetas.forEach(function(elemento) {
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
          }); 
          
    }, 1000);

    contadorFallos += 1;
    contadorIntentos += 1;
    errores.textContent = `Errores: ${contadorFallos}`;
    intentos.textContent = `Intentos: ${contadorIntentos}`;
}

