document.getElementById('btn-copiar').hidden = true;
document.getElementById('btn-reset').hidden = true;

//Variables globales, también usadas en cada función
let textoRespuesta = document.getElementById("textoRespuesta");
let textoInfo = document.getElementById("textoInfo");
let texto = document.getElementById("texto");




function encriptar()
{

    let textoDado = texto.value.toLowerCase();
    //console.log(textoDado);
    let textoConvertido = textoDado
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");
    

    if(textoDado != "")
    {
        textoRespuesta.value  = textoConvertido;  
        textoInfo.textContent = "Texto encriptado con éxito";
    }else{
         alert("Ingrese texto para encriptar");
    }

    document.getElementById('btn-copiar').hidden = false;
    document.getElementById('btn-reset').hidden = false;
    document.getElementById('munheco').hidden = true;
    
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
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            alert('Error al copiar al portapapeles: ', err);
        });
}

function desencriptar()
{

    let textoDado = texto.value.toLowerCase();
    let textoConvertido = textoDado
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");


    if(textoDado != "")
    {
        textoRespuesta.value  = textoConvertido;  
        textoInfo.textContent = "Texto desencriptado con éxito";
    }else{
         alert("Ingrese texto para desencriptar");
    }

    document.getElementById('btn-copiar').hidden = false;
    document.getElementById('btn-reset').hidden = false;
    document.getElementById('munheco').hidden = true;
    

}

function resetear()
{
    console.log("Copiar");
    texto.value = '';
    textoRespuesta.value = '';
    textoInfo.innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.';
    document.getElementById('btn-copiar').hidden = true;
    document.getElementById('btn-reset').hidden = true;
    document.getElementById('munheco').hidden = false;    
}