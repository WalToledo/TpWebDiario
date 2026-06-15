var formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');

var validarCampos = function(input){
    var mensajeError = "";
    var valor = input.value.trim();

    if (valor === "") {
        mensajeError = 'El campo es obligatorio.';
        } else{
            switch(input.id){
                case 'username':
                    var tieneEspacio = valor.includes(' ');

                    if(valor.length < 6){
                        mensajeError = 'El nombre debe tener por lo menos 6 letras'
                    }else if(tieneEspacio == false){
                        mensajeError = 'El nombre debe tener un espacio en medio'
                    }
                    break;
                
                case 'email':
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(valor)) {
                        mensajeError = "Por favor, ingrese un correo electrónico válido.";
                    }
                    break;

                case 'password':
                    if (valor.length < 8) {
                        mensajeError = "La contraseña debe tener al menos 8 caracteres.";
                    }
                    break;

                case 'confirm-password':
                    var passwordActual = document.getElementById('password').value
                    if(valor !== passwordActual){
                        mensajeError = 'Las contraseñas no coinciden'
                    }
                    break;

                case 'age':
                    var edad = parseInt(valor);
                    if(edad < 18){
                        mensajeError = 'Debe ser mayor de 18 años.' 
                    }
                    break;
                case 'phone':
                    if(valor.length < 7){
                        mensajeError = 'El numero debe tener por lo menos 7 digitos.'
                    }
                    break;

                case 'address':
                    var tieneLetras = /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(valor);
                    var tieneNumeros = /[0-9]/.test(valor);
                    var tieneEspacio = valor.includes(' ');

                    if (valor.length < 5) {
                        mensajeError = 'La dirección debe tener al menos 5 caracteres.';
                    } else if (tieneLetras === false || tieneNumeros === false || tieneEspacio === false) {
                        mensajeError = 'La dirección debe contener letras, números y un espacio.';
                    }
                    break;

                case 'city':
                    if(valor.length < 3){
                        mensajeError = 'Debe tener al menos 3 caracteres'
                    }
                    break;

                case 'postal-code':
                    if(valor.length < 3){
                        mensajeError = 'Debe tener al menos 3 caracteres'
                    }
                    break;

                case 'dni':
                    if(valor.length < 7 || valor.length > 8){
                        mensajeError = 'El numero debe tener 7 u 8 digitos'
                    }
                    break;
            }
        }

    var spanError = document.getElementById('error-' + input.id);

    if(mensajeError !== ''){
        spanError.textContent = mensajeError;
        spanError.style.display = 'block';
        input.classList.add('input-error');
        return false
    }else{
        spanError.style.display = 'none';
        input.classList.remove('input-error');
        return true;
    }
}

for(var i = 0; i < inputs.length; i++){
    var inputActual = inputs[i];

    inputActual.addEventListener('blur', function(evento){
        validarCampos(evento.target);
    })

    inputActual.addEventListener('focus', function(evento){
        var spanError = document.getElementById('error-' + evento.target.id);
        spanError.style.display = 'none';
        evento.target.classList.remove('input-error');
    })
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    var formularioValido = true;
    var textoDeErrores = '';
    var textoDeDatos = '';

    for(var i = 0; i < inputs.length; i++){
        var inputActual = inputs[i];
        var esValido = validarCampos(inputs[i]);
    
        if(esValido === false){
            formularioValido = false;
            var errorDelHTML = document.getElementById('error-' + inputActual.id).textContent;
            textoDeErrores = textoDeErrores + `${inputActual.id}: ${errorDelHTML}\n`;
        }else{
            textoDeDatos = textoDeDatos + `${inputActual.id}: ${inputActual.value}\n`;
        }
    }
    if(formularioValido === false){
        alert('El formulario tiene los siguientes errores:\n\n' + textoDeErrores);
    }else{
        alert('Formulario enviado con éxito. Datos:\n\n' + textoDeDatos);
    }
});