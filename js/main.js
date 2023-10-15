let ingresoInvalido = true;

while(ingresoInvalido){
    let nombreDeusuario = prompt("Ingrese su nombre de usuario para iniciar sesion");
    if(nombreDeusuario !=""){
        alert("¡Bienvenid@ a PayDay " + nombreDeusuario +"!");
        alert("En PayDay nos dedicamos a liquidar sueldos nominales en $");
        ingresoInvalido = false;
    }else{
        alert("Campos vacíos");
    }
}


//funcion para calcular descuentos de sueldos nominales
function calcularSueldo (sueldoNominal, descuentoMontepio = 0.15, descuentoFRL = 0.010, descuentoFonasa = 0.045){
    let descuentosTotales = sueldoNominal * descuentoMontepio + sueldoNominal * descuentoFRL + sueldoNominal * descuentoFonasa;
    alert("El descuento es de: $" + descuentosTotales);
    return sueldoNominal - descuentosTotales;
}

let confirmacionDeusuario = true;

while(confirmacionDeusuario){
    let ingresoDesueldo = parseFloat(prompt("Ingrese por favor un sueldo en $ nominales"));
    let sueldoLiquido = calcularSueldo (ingresoDesueldo);
    alert("Su sueldo liquido a cobrar es de: $" + sueldoLiquido);
    let respuestaconfirmacionDeusuario = prompt("¿Desea calcular otro sueldo? | Ingrese SI o NO");
    if(respuestaconfirmacionDeusuario == "NO"){
        confirmacionDeusuario = false;
    }
}

if(confirmacionDeusuario == false){
    alert("Vuelve pronto");
}
