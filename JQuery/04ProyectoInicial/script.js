$(document).ready(function () {
    var a = 0;
    var b = 0;
    $(document).on('click', '#btnAction', function () {
        var titulo = $('#tituloNoticia').val();
        var slug = titulo
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        $('#textoSlug').val(slug);
    });
    $(document).on('click', '#btnSave', function () {
        if ($('#tituloNoticia').val() === '') {
            alert("Debes completar este campo");
        } else if ($('#descripcionNoticia').val() === '') {
            alert("Debes completar este campo");
        } else if ($('#textoSlug').val() === '') {
            alert("Debes completar este campo");
        } else if ($('#resultSuma').val() === '') {
            alert("Debes completar este campo");
        }
        var resultado = parseInt($('#resultSuma').val());
        if (resultado === a + b) {
            alert('Formulario guardado correctamente');
        } else {
            alert('Error: el resultado de la suma es incorrecto');
            generarNumeros();
        }
    });
    generarNumeros();
    function generarNumeros() {
        a = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * 10) + 1;
        $("#sumaLabel").text(`¿Cuánto es el resultado de la suma ${a} + ${b}?`);
    }
});