const encriptarBtn = document.getElementById("encriptB");
const desencriptarBtn = document.getElementById("desencripB");
const imgTarjeta = document.getElementById("imgBuscador");
const texto01 = document.getElementById("text01");
const texto02 = document.getElementById("text02");


// Agregar un evento de clic al botón "Encriptar"
encriptarBtn.addEventListener("click", function() {
    let textoToEncrip = document.getElementById("texToEncrip").value;
    
    if(textoToEncrip.trim() !== ""){
        imgTarjeta.style.visibility= "hidden";
        texto01.style.visibility= "hidden";
        texto02.style.visibility= "hidden";
    }
    
  });
  