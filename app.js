document.getElementById('btn-copiar').hidden = true;

function encriptar()
{
    let texto = document.getElementById("texto");
    let textoRespuesta = document.getElementById("textoRespuesta");
    let textoInfo = document.getElementById("textoInfo");

    let textoDado = texto.value.toLowerCase();
    console.log(textoDado);
    let textoConvertido = textoDado
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

    console.log(textoDado);    

    if(textoDado != "")
    {
        textoRespuesta.value  = textoConvertido;  
        textoInfo.textContent = "Texto encriptado con éxito";
    }else{
         alert("Ingrese texto para encriptar");
    }

    document.getElementById('btn-copiar').hidden = false;
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
    let texto = document.getElementById("texto");
    let textoRespuesta = document.getElementById("textoRespuesta");
    let textoInfo = document.getElementById("textoInfo");

    let textoDado = texto.value.toLowerCase();
    console.log(textoDado);
    let textoConvertido = textoDado
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");

    console.log(textoDado);    

    if(textoDado != "")
    {
        textoRespuesta.value  = textoConvertido;  
        textoInfo.textContent = "Texto desencriptado con éxito";
    }else{
         alert("Ingrese texto para desencriptar");
    }

    document.getElementById('btn-copiar').hidden = false;
    document.getElementById('munheco').hidden = true;
    

}