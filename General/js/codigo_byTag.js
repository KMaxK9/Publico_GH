 // Código JavaScript de Modificaciones con getElementsbyTagName.

 // Defino una variable con el mensaje en html.
 let detalle = "<ol><li>Definimos <b>variables</b></li><li> y vemos cosas relativas.</li></ol> ";

 // Le muestra por consolo para verficar.
 console.log(typeof(detalle), detalle);

 // Obtengo un puntero al elemento HTML que quiero modificar.
 var parrafos = document.getElementsByTagName("p");
 console.log(typeof(parrafos), parrafos);

 // Modifico el contenido de dicho elemento.
 parrafos[1].innerHTML = detalle;

 //  modifico el color de fondo para todos los parrafos (5).
 for (let i = 0 ; i < 5 ; i++) {
    parrafos[i].style.backgroundColor = "yellow";
 }