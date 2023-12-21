let ingresoInvalido = true;
const formatoNombre = /^[A-Z][a-z]+$/;

while (ingresoInvalido) {
    let nombreDeUsuario = prompt("Ingrese su nombre de usuario");

    if (nombreDeUsuario !== null && nombreDeUsuario.match(formatoNombre)) {
        alert("¡Bienvenid@ a PayDay " + nombreDeUsuario + "!");
        alert("En PayDay nos dedicamos a liquidar sueldos nominales en $");
        ingresoInvalido = false;
    } else if (nombreDeUsuario === null) {
        alert("Has cancelado, por favor ingresa un nombre válido.");
    } else {
        alert("Por favor, ingresa un nombre válido (formato ejemplo: Facundo).");
    }
}


//funcion para calcular descuentos de sueldos nominales;
function calcularSueldo (sueldoNominal, descuentoMontepio = 0.15, descuentoFRL = 0.10, descuentoFonasa = 0.045){
    let descuentosTotales = sueldoNominal * descuentoMontepio + sueldoNominal * descuentoFRL + sueldoNominal * descuentoFonasa;
    alert("El descuento es de: $" + descuentosTotales);
    return Math.ceil(sueldoNominal - descuentosTotales); 
}

let confirmacionDeusuario = true;

while(confirmacionDeusuario){
    let ingresoDesueldo;
    //Funcion para verificar si el usuario ingreso un número correcto y no un NaN;
    while(isNaN(ingresoDesueldo) == true){
        ingresoDesueldo = parseFloat(prompt("Ingrese por favor un sueldo en $ nominales"));
    }
    let sueldoLiquido = calcularSueldo (ingresoDesueldo);
    alert("Su sueldo liquido a cobrar es de: $" + sueldoLiquido + " aproximadamente");
    let respuestaconfirmacionDeusuario = prompt("¿Desea calcular otro sueldo nominal? | Ingrese Si o No");
    if(validarRta(respuestaconfirmacionDeusuario, "no") == true){
        alert("¡Vuelve pronto!")
        continuaCiclo = "no";
    }
}

//Funcion para validar la respuesta del usuario;
function validarRta(respuesta, textoValidar){
    if(respuesta.toLowerCase() == textoValidar){
        return true;
    }
        return false;
}

let continuaCiclo = "si";
