var formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');

var validarCampos = function(input){
    var mensajeError = "";
    var valor = input.value.trim();

    if (valor === "") {
        mensajeError = 'El campo es obligatorio.';
        } else{
            switch(input.id){
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

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    var formularioValido = true;

    for(var i = 0; i < inputs.length; i++){
        var esValido = validarCampos(inputs[i]);
    
        if(esValido === false){
            formularioValido = false;
        }
    }
    if(formularioValido === false){
        alert('Error en el formulario.')
    }else{
        alert('Formulario enviado con éxito')
    }
});