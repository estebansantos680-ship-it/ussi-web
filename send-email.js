(function() {
    emailjs.init("JOek32w76i2fF6P7x"); 
})();

document.getElementById("cotizacionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value
    };

    emailjs.send("service_2ht6wo9", "template_mhfo7c1", params)
        .then(function() {
            document.getElementById("mensajeConfirmacion").classList.remove("oculto");
        }, function(error) {
            alert("Hubo un error al enviar el formulario: " + JSON.stringify(error));
        });
});

