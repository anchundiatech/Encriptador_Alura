const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar() {
    const textoEncriptado = encriptarTexto(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoEncriptado = decencriptarTexto(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

lnavigator.permissions.query({ name: "write-on-clipboard" })
.then((resultado) => {
  if (resultado.state == "granted" || resultado.state == "prompt") {
    alert("¡Permiso de escritura concedido!");
  }
});



//Funcion para encriptar el texto
function encriptarTexto(stringText) {
    let codeMatriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringText = stringText.toLowerCase();

    for (let i = 0; i < codeMatriz.length; i++) {
        if (stringText.includes(codeMatriz[i][0])) {
            stringText = stringText.replaceAll(codeMatriz[i][0], codeMatriz[i][1]);
        }
    }

    return stringText;
}

//Funcion para  desencriptar el texto
function decencriptarTexto(stringDecencriptar) {
    let codeMatriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDecencriptar = stringDecencriptar.toLowerCase();

    for (let i = 0; i < codeMatriz.length; i++) {
        if (stringDecencriptar.includes(codeMatriz[i][1])) {
            stringDecencriptar = stringDecencriptar.replaceAll(codeMatriz[i][1], codeMatriz[i][0]);
        }
    }

    return stringDecencriptar;
}


function validarTexto(texto) {
    const regex = /[^\w\s]/g; // Expresión regular para detectar caracteres especiales y acentos
    return !regex.test(texto); // Devuelve true si el texto es válido, false si no lo es
}

textArea.addEventListener('input', () => {
    const texto = textArea.value;
    if (!validarTexto(texto)) {
        alert('No se permiten letras con acentos ni caracteres especiales.');
        navigator.clipboard 
        .readText()
        .then(
          (clipText) => (document.querySelector(".editor").innerText += clipText),
        );
            textArea.value = ''; // Limpia el campo de texto
    }
})  





