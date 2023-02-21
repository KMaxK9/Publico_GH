 // Código JavaScript de Modificaciones.

 // Obtengo un puntero al elemento HTML que quiero modificar.
 var divs = document.getElementsByTagName("div");
 divs[1].style.backgroundColor = "yellow";
 console.log(typeof(divs), divs);

 // creo el contenido en el segundo div.
 let piramide="";

 // Muestro las líneas.  
 for (let v = 1 ; v < 6 ; v++) {
    for (let h = 1 ; h <= v ; h++) {
         piramide = piramide + v;
    }
    piramide = piramide + "<br/>";
 }
 divs[1].innerHTML = piramide;

