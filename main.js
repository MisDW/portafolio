const correoInput = document.getElementById("correo-input");
const btnCopy = document.getElementById("btn-copy");

// Agregar un evento click al botón para guardar el texto
btnCopy.addEventListener("click",async function() {
    try {
        // Copiar el texto al portapapeles
        await navigator.clipboard.writeText(correoInput.value);
        alert("Texto copiado al portapapeles.");
    } catch (error) {
        console.error("Error al copiar el texto:", error);
        alert("No se pudo copiar el texto al portapapeles.");
    }
});

let showPrint = new Message("Hola soy un texto");
showPrint.print()