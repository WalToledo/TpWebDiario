var inputs = document.getElementById('formulario');

var validarCampos = function(input){
    var mensajeError = "";
    var valor = input.value.trim();
}

if (valor === "") {
    mensajeError = "El campo " + input.name + " es obligatorio.";
} else{
    switch(input.id){
        case 'email':
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) {
                mensajeError = "Por favor, ingrese un correo electrónico válido.";
                break;
            }
    }
}