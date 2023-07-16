function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  

  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";
  
  tarjetasBarajadas.forEach(function(element) {
  var tarjeta = document.createElement("div");

  tarjeta.innerHTML = 
  "<div class='tarjeta' data-valor= " + 
  element +
   ">" +
   "<div class='tarjeta__contenido'>" +
   element +
   "</div>" +
   "</div>"
  ;

  mesa.appendChild(tarjeta);
  

  });

}


