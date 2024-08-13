//const encriptar = document.getElementById("bnt-encriptar");
//const desencriptar = document.getElementById("bnt-desencriptar");
//const copiar = document.getElementById("bnt-copiar");

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
    //let texto = textFinal;
	textoRespuesta.select();
	//navigator.clipboard.writeText(texto.value);
	//clipboard función no compatible con móviles
    try {
        // Copiando el texto seleccionado
        //copyToClipboard(textoRespuesta.value);
        copyToClipboard(textoRespuesta.value);
        textoInfo.innerHTML = 'Copiado!';
    } catch (err) {
        textoInfo.innerHTML = 'Navegador no soportado!';
    }    
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
        });
}
