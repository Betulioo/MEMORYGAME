
function botonTarjetas() {
  
    var botondiv = document.querySelector("#mesa");
    var boton = document.createElement("button"); 
    boton.classList.add("botondiv")
    boton.innerHTML =
      
      "REPARTE TARJETAS" 
  
    botondiv.appendChild(boton);
    boton.addEventListener("click", reparatir)

    
  };
  botonTarjetas()
  
  function reparatir(){
    reparteTarjetas();
    botonTarjetas();
    botonaintentos();
    botonaciertos();
    botonafallos();
    inicioCronometro();

    document.querySelectorAll(".tarjeta").forEach(function(elemento) {
        elemento.addEventListener("click", descubrir);
      });
   
  }


  function botonaciertos() {
  
    var contadordiv = document.querySelector("#mesa");
    var contador = document.createElement("div"); 
    contador.classList.add("aciertos");
    contador.setAttribute('id','contadorAciertos');
 
    contadordiv.appendChild(contador);
   
  };
  botonaciertos()

  function botonafallos() {
  
    var contadordiv = document.querySelector("#mesa");
    var contador = document.createElement("div"); 
    contador.classList.add("fallos");
    contador.setAttribute('id','contadorError');

  
    contadordiv.appendChild(contador);
   
  };
  botonafallos()

  function botonaintentos() {
  
    var contadordiv = document.querySelector("#mesa");
    var contador = document.createElement("div"); 
    contador.classList.add("intentos");
    contador.innerHTML = 
            "<span " +
            "id='contadorIntentos'>" +
            "00" +
            "</span>"+
            "/" +
            "<span " +
            "id='mov-total'>" +
            "20" +
            "</span>"

            

  
    contadordiv.appendChild(contador);
   
  };
  botonaintentos()