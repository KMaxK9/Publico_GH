 // Código JavaScript de Modificaciones con getElementsbyId.

 // Defino una variable con el mensaje en html.
 let detalle = "<ol><li>Definimos <b>variables</b></li><li> y vemos cosas relativas.</li></ol> ";

 // Le muestro por consola para verficar.
 console.log(typeof(detalle), detalle);

 // Obtengo un puntero al elemento HTML que quiero modificar.
 var elemento = document.getElementById("aqui");

 // Modifico el contenido de dicho elemento.
 elemento.innerHTML = detalle;