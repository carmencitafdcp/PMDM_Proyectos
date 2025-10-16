$(document).ready(function () {
    $(document).on('input', '#textInput', function () {
        var texto = $('#textInput').val() || '';
        var caracteres = texto.length;
        var espacios = 0;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === " ") {
                espacios++;
            }
        }
        var textoLimpio = texto.trim();
        var palabras = 0;
        if (textoLimpio !== "") {
            var separadas = textoLimpio.split(" ");
            for (let i = 0; i < separadas.length; i++) {
                if (separadas[i].trim() !== "") {
                    palabras++;
                }
            }
        }
        var textoLimpio = texto.trim();
        var parrafos = 0;
        if (textoLimpio !== "") {
            var lineas = texto.split(/\n+/); // \n = salto de línea, + = uno o más seguidos
            for (let i = 0; i < lineas.length; i++) {
                if (lineas[i].trim() !== "") {
                    parrafos++;
                }
            }
        }
        $('#carac').text(caracteres);
        $('#spaces').text(espacios);
        $('#palab').text(palabras);
        $('#parraf').text(parrafos);
    });
})