

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    // Evitar el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    // Variables de validación
    let esValido = true;

    // Limpiar mensajes de ayuda
    document.getElementById('nombreAlert').textContent = '';
    document.getElementById('apellidoAlert').textContent = '';
    document.getElementById('emailAlert').textContent = '';
    document.getElementById('telefonoAlert').textContent = '';
    document.getElementById('descripcionAlert').textContent = '';

    // Validación del campo "Nombre"
    if (nombre === '') {
        document.getElementById('nombreAlert').textContent = 'El nombre es obligatorio.';
        esValido = false;
    }

    // Validación del campo "Apellido"
    if (apellido === '') {
        document.getElementById('apellidoAlert').textContent = 'El apellido es obligatorio.';
        esValido = false;
    }

    // Validación del campo "Email"
    if (email === '') {
        document.getElementById('emailAlert').textContent = 'El email es obligatorio.';
        esValido = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailAlert').textContent = 'El email no es válido.';
        esValido = false;
    }

    // Validación del campo "Telefono"
    if (telefono && telefono < 999999999) {
        document.getElementById('telefonoAlert').textContent = 'Numero de telefono incorrecto.';
        esValido = false;
    }

    // Validación del campo "Descripción"
    if (descripcion === '') {
        document.getElementById('descripcionAlert').textContent = 'Ingrese una descripción.';
        esValido = false;
    }

    // Si es válido, enviar el formulario
    if (esValido) {
        document.getElementById('nombre').value='';
        document.getElementById('apellido').value='';
        document.getElementById('email').value='';
        document.getElementById('telefono').value='';
        document.getElementById('ciudad').value='';
        document.getElementById('descripcion').value='';
        alert("Consulta enviada!");
        this.submit();
    }
});