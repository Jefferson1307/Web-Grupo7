// Leer la información del formulario cuando la página se cargue
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario_contacto").addEventListener('submit',validacionFormulario);
})

// Leer el párrafo con el ID donde se mostrará los mensajes de error
var msjError = document.getElementById("msjError");

// Empezamos la validación del formulario...
function validacionFormulario(evento) {
    // el argumento 'evento' es el evento 'submit'

    evento.preventDefault(); // Evita ejecutar temporalmente la llamada al programa php que ejecuta 'submit'

    // Validar el campo nombre
    var nombre = document.getElementById("txtnombres").value;
    if(nombre==null || nombre.length==0) {
        msjError.innerHTML="El nombre no debe estar vacío";
        return;
    }

    // Validar con expresiones regulares
    // Solo letras y espacios
    var regExpLetrasEspacios = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
    if(regExpLetrasEspacios.test(nombre)==false) {
        msjError.innerHTML="El nombre sólo debe contener letras y espacios";
        return;
    }

    //Apellido
    var apellido = document.getElementById("txtapellidos").value;
    if(apellido==null || apellido.length==0) {
        msjError.innerHTML="El apellido no debe estar vacío";
        return;
    }


    var regExpLetrasEspacios = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
    if(regExpLetrasEspacios.test(apellido)==false) {
        msjError.innerHTML="El apellido sólo debe contener letras y espacios";
        return;
    }

    // Validar la dirección de correo
    var correo = document.getElementById("txtcorreo").value;
    var regExpCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(regExpCorreo.test(correo)==false) {
        msjError.innerHTML="El correo electrónico ingresado no tiene un formato válido";
        return;
    }


    // Validar que el celular (teléfono) sólo tenga números
    var telefono = document.getElementById("txtcelular").value;
    var regExpNumeros = /^[0-9]+$/;

    if(regExpNumeros.test(telefono)==false) {
        msjError.innerHTML="El número telefónico debe contener sólo digitos";
        return;
    }

    // Valida si ha seleccionado un elemento de la lista
    var i = document.getElementById("lstdestino").selectedIndex;  
    if(i==0 || i==null || i==-1) {
        msjError.innerHTML="Debe seleccionar un destino de la lista";
        return;
    }

    // Comprueba si se ha marcado el checkbox de aceptación de términos y condiciones
    var acepto = document.getElementById("chkacepto").checked;
    if(acepto==false) {
        msjError.innerHTML="Debe aceptar los términos y condiciones de privacidad";
        return;
    }

    // alert("Datos correctos! Ya puede grabar")
    // Si pasó todas las etapas de validación, entonces se puede
    // ejecutar el programa de php que graba los datos en el servidor
    this.submit();
}
