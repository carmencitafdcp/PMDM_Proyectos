$(document).ready(function () {
    var abcMayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var abcMinus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    $(document).on('click', '#btnAction', function(){
        var action = $('#selectAction').val();
        var input = $('#textInput').val();
        var output = '';

        if (!action) {
            alert('Selecciona una acción (cifrar o descifrar)');
            return;
        }
        if (!input) {
            alert('Introduce un texto para cifrar o descifrar');
            return;
        }
        if (action === 'cifrar') {
            for (var i = 0; i < input.length; i++) {
                var char = input[i];
                if (abcMayus.includes(char)) {
                    var index = abcMayus.indexOf(char);
                    var newIndex = (index + 3) % abcMayus.length;
                    output += abcMayus[newIndex];
                } else if (abcMinus.includes(char)) {
                    var index = abcMinus.indexOf(char);
                    var newIndex = (index + 3) % abcMinus.length;
                    output += abcMinus[newIndex];
                } else {
                    output += char;
                }
                
            }
        } else if (action === 'descifrar') {
            for (var i = 0; i < output.length; index++) {
                var charOutput = output[i];
                if(abcMayus.includes(charOutput)){
                    var indexOut = abcMayus.indexOf(charOutput);
                    var newIndexOut = (index - 3) % abcMayus.length;
                    input += abcMayus[newIndexOut]; s
                } else if (abcMinus.includes(charOutput)){
                    var indexOut = abcMinus.indexOf(char);
                    var newIndexOut = (index - 3) % abcMinus.length;
                    input += abcMinus[newIndexOut];
                }
                
            }
        }
        $('#textOutput').val(output);
    });
})