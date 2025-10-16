 /*
     EJERCICIO: hacer una página HTML, que por defecto tenga:

     1. Un párrafo que muestre un Texto Lorem ipsum
     2. Un botón situado en un sitio estratégico que me permita
     alternar el estilo de la página entre light/dark mode.

     Por defecto la página debe aparecer con el fondo de color
     blanco y el texto de color negro (Light mode).

     Pero si pulso el botón de cambio de modo, se debe cambiar
     al modo contrario. De manera que el Dark mode muestra 
     el fondo negro y la letra blanco.

     Curraros un poquito el botón para que muestre una etiqueta
     y un icono que representen al modo al que se cambia si se
     pulsa.
     */

$(document).ready(function () {
    //Seleccionar el boton
    $(document).on("click", "button", function () {
        $("body").css("background-color", "black");
        $("#texto").css("color", "white");
    });
});

//  $(document).ready(function () {
//       let modo = "light"; // Por defecto empieza en modo claro

//       $("#toggleBtn").on("click", function () {
//         if (modo === "light") {
//           $("body").css("background-color", "black");
//           $("#texto").css("color", "white");
//           $(this).html("☀️ Cambiar a Light Mode");
//           modo = "dark";
//         } else {
//           $("body").css("background-color", "white");
//           $("#texto").css("color", "black");
//           $(this).html("🌙 Cambiar a Dark Mode");
//           modo = "light";
//         }
//       });
//     });