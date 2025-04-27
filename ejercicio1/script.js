/* DOMContentLoaded es un comando que sirve para ejecutar JS cuando todo el html ha sido cargado sin esperar carga de imagenes, css u otros  */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm"); // Obtenemos el formulario por su ID
  
    // El boton de enviar el formulario valida que los valores de los campos sean correctos
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Obtenemos los valores de los campos
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
  
      // Variable para controlar si el formulario es válido o no
      let isValid = true;
  
      // Validación de los campos
      // Nombre
      if (nameInput.value.trim() === "") {
        setError(nameInput, "El nombre es obligatorio.");
        isValid = false;
      } else {
        clearError(nameInput);
      }
      // Email
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo electrónico
  
      if (emailValue === "") {
        setError(emailInput, "El correo es obligatorio.");
        isValid = false;
      } else if (!emailRegex.test(emailValue)) {
        setError(emailInput, "Ingresa un correo válido.");
        isValid = false;
      } else {
        clearError(emailInput);
      }
  
      // Mensaje
      if (messageInput.value.trim() === "") {
        setError(messageInput, "El mensaje es obligatorio.");
        isValid = false;
      } else {
        clearError(messageInput);
      }
  
      // Envio de formulario
      if (isValid) {
        alert("Formulario enviado correctamente"); // Mensaje tras envio de formulario
        form.reset(); // Reinicio de formulario
        [nameInput, emailInput, messageInput].forEach(clearError); // Limpia mensajes de error
      }
    });
  

    function setError(input, message) {
      input.classList.add("is-invalid");
      const errorContainer = document.getElementById(`${input.id}Error`);
      errorContainer.textContent = message;
    }
  

    function clearError(input) {
      input.classList.remove("is-invalid");
      const errorContainer = document.getElementById(`${input.id}Error`);
      errorContainer.textContent = "";
    }
  });
  