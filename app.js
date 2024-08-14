document.getElementById('btn-copiar').hidden = true;
document.getElementById('btn-reset').hidden = true;

//Variables globales, también usadas en cada función
let textoRespuesta = document.getElementById("textoRespuesta");
let textoInfo = document.getElementById("textoInfo");
let texto = document.getElementById("texto");


function encriptar()
{
    let textoConvertido="";
    if(validarTexto(texto.value))
    {
        textoConvertido = texto.value
            .replace(/e/gi,"enter")
            .replace(/i/gi,"imes")
            .replace(/a/gi,"ai")
            .replace(/o/gi,"ober")
            .replace(/u/gi,"ufat");


            if(textoConvertido != "")
                {
                    textoRespuesta.value  = textoConvertido;  
                    textoInfo.textContent = "Texto encriptado con éxito";
                    document.getElementById('btn-copiar').hidden = false;
                    document.getElementById('btn-reset').hidden = false;
                    document.getElementById('munheco').hidden = true;      
                }else{
                     alert("Ingrese texto para encriptar");
                }

        
    }





}

function copiar()
{
	textoRespuesta.select();
    try {
        copyToClipboard(textoRespuesta.value);
        textoInfo.innerHTML = 'Copiado!';
    } catch (err) {
        textoInfo.innerHTML = 'Navegador no soportado!';
    }    
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            //alert('Texto copiado al portapapeles');
            texto.select();
        })
        .catch(err => {
            alert('Error al copiar al portapapeles: ', err);
        });
}

function desencriptar()
{

    textoConvertido="";
    if(validarTexto(texto.value))
    {
        textoConvertido = texto.value
            .replace(/enter/gi,"e")
            .replace(/imes/gi,"i")
            .replace(/ai/gi,"a")
            .replace(/ober/gi,"o")
            .replace(/ufat/gi,"u");


            if(textoConvertido != "")
                {
                    textoRespuesta.value  = textoConvertido;  
                    textoInfo.textContent = "Texto desencriptado con éxito";
                    document.getElementById('btn-copiar').hidden = false;
                    document.getElementById('btn-reset').hidden = false;
                    document.getElementById('munheco').hidden = true;    
                }else{
                     alert("Ingrese texto para desencriptar");
                }

        
    }
}

function resetear()
{
    texto.value = '';
    textoRespuesta.value = '';
    textoInfo.innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.';
    document.getElementById('btn-copiar').hidden = true;
    document.getElementById('btn-reset').hidden = true;
    document.getElementById('munheco').hidden = false;    
}

function validarTexto(dato) {
    // Expresión regular que solo permite letras minúsculas sin acentos
    let regex = /^[a-z\s]*$/;

    if (!regex.test(dato)) {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acentos, números y espacios.");
        return false; // Evita que el formulario se envíe
    }

    return true; // Texto OK
}