const btn_encriptar = document.querySelector('#btn_encriptar')
const btn_desencriptar = document.querySelector('#btn_desencriptar')
const btn_copiar = document.querySelector('#btn_copiar')
const entrada = document.querySelector('#entrada')
const mensaje = document.querySelector('#mensaje')
const div_mensaje = document.querySelector('#div_mensaje')
const vacio = document.querySelector('#vacio')

btn_encriptar.addEventListener('click', encriptar)
btn_desencriptar.addEventListener('click', desencirptar)
btn_copiar.addEventListener('click', copiar)

function pintar(){
    div_mensaje.style.border = "3px solid red"
    div_mensaje.style.boxShadow = "10px 10px 10px red"
    setTimeout(function() {
        div_mensaje.style.border = ""
        div_mensaje.style.boxShadow = ""
        }, 1500);
}

function encriptar(){
   
    if(entrada.value.trim() === ""){
        pintar()
    }else{
        let palabras = entrada.value.split(" ")

        let nuevasPalabras = [];

        palabras.forEach(function(palabra) {
            /* nuevasPalabras.push(palabra.replace(/[aA]/g, "ai").replace(/[eE]/g, "enter").replace(/[iI]/g, "imes").replace(/[oO]/g, "ober").replace(/[uU]/g, "ufat")); */
            nuevasPalabras.push(palabra.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat"));
        });

        imprimir(nuevasPalabras)
    }
    

}

function desencirptar(){
    if(entrada.value.trim() === ""){
        pintar()
    }else{
        let palabras = entrada.value.split(" ")

        let nuevasPalabras = [];

        palabras.forEach(function(palabra) {
            /* nuevasPalabras.push(palabra.replace(/[aA]/g, "ai").replace(/[eE]/g, "enter").replace(/[iI]/g, "imes").replace(/[oO]/g, "ober").replace(/[uU]/g, "ufat")); */
            nuevasPalabras.push(palabra.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"));
        });

        imprimir(nuevasPalabras)
    }
}

function copiar(){
    // Seleccionar el texto del párrafo
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(mensaje);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
    alert('El texto ha sido copiado')
}

function imprimir(nuevasPalabras){
        vacio.style.display = "none"
        mensaje.textContent = nuevasPalabras.join(" ")
        mensaje.style.display = "block"
        btn_copiar.style.display = "block"
}