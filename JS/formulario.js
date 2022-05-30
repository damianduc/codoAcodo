document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario1").addEventListener('submit', validarFormulario); 
    });
      
function validarFormulario(evento) {
        
    evento.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        alert('Por favor ingresa el Nombre');
        document.getElementById('nombre').focus()
        return;
    }
    
    
    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
        alert('Por favor ingresa el apellido');
        document.getElementById('apellido').focus()
          return;
    }
        
    var telefono = document.getElementById('telefono').value;
    if(telefono.length == 0) {
        alert('Por favor ingresa el telefono');
        document.getElementById('empresa').focus()
        return;
    }
        
    var email = document.getElementById('email').value;
    if(email.length == 0) {
        alert('Por favor ingresa el email');
        document.getElementById('email').focus()
        return;
    }
        
    var terminos = document.getElementById('terminos');
    if(!terminos.checked) {
        alert('Para continuar, debe leer y aceptar las bases y condiciones');
        return;
    }
    
    alert("Muchas gracias por enviar el formulario!");
        document.formulario.submit();
    }
      