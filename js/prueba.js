//funcion para validar respuesta
function validarRta(respuesta, textoValidar){
    if(respuesta.toLowerCase() == textoValidar){
        return true;
    }
        return false;
}

let continuaCiclo = "si";

while(continuaCiclo == "si"){
    let numeroIngresado = parseInt(prompt("Por favor ingrese un número"));
    alert("El numero ingresado es: " + numeroIngresado);
    let respuestaUsuario = prompt("Desea ingresar un número más");
    if(validarRta(respuestaUsuario, "no") == true){
        continuaCiclo = "no";
    }

}