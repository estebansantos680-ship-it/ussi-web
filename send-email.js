(function() {
    emailjs.init("TU_PUBLIC_KEY_AQUI");
})();

document.getElementById("cotizacionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value
    };

    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", params)
        .then(function() {
            document.getElementById("mensajeConfirmacion").classList.remove("oculto");
        }, function(error) {
            alert("Hubo un error al enviar el formulario: " + JSON.stringify(error));
        });
});
