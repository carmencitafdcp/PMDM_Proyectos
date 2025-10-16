$(document).ready(function (){ //Funcion anónima
    //Selector de ID
    $("#titulo").html("Bye bye World!");
    //Selector de clase    
    // $(".course").css("color", "red");
    //Selector de etiqueta 
    $("span").addClass(".course");
    //Evento click
    $(document).on("click", "#span1DAM",function(){
        $(this).html("😄1ºDAM");
        //Hacer click y que cambie a robot y click otra vez caritaç
    });  
    $(document).on("click", "#span",function(){
        $(this).html("😄 Has hecho click en este");
    });
}); //Sirve para cargar la página

//

