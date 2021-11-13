var nombre = document.querySelector('#nombre');
var email = document.querySelector('#email');
var asunto = document.querySelector('#asunto');
var mensaje = document.querySelector('#mensaje');

function ValidationForm() {
    if (nombre.value == 0) {
        document.getElementById('error').innerHTML = "Por favor digite su nombre!"
        return false;
    } else if (email.value == 0) {
        document.getElementById('error').innerHTML = "Por favor digite su email!"
        return false;
    } else if (asunto.value == 0) {
        document.getElementById('error').innerHTML = "Por favor digite un asunto!"
        return false;
    } else if (mensaje.value == 0) {
        document.getElementById('error').innerHTML = "Por favor digite un mensaje!"
        return false;
    } else {
        document.getElementById('error').innerHTML = "Formulario Completo!"
        alert('El formulario contiene los campos de datos completos! Su mensaje ha sido enviado a Pulperia La Legua! Pronto le brindaremos la respuesta. Saludos cordiales.');
    }
}