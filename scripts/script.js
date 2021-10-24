
function sumar() {
    var numero1 = document.getElementById('myNumber01').value;
    var numero2 = document.getElementById('myNumber02').value;
    var resultado = parseInt(numero1) + parseInt(numero2);
    validarVacios(resultado,"suma");
}
function restar() {
    var numero1 = document.getElementById('myNumber01').value;
    var numero2 = document.getElementById('myNumber02').value;
    var resultado = numero1 - numero2;
    validarVacios(resultado,"resta");
}
function multiplicar() {
    var numero1 = document.getElementById('myNumber01').value;
    var numero2 = document.getElementById('myNumber02').value;
    var resultado = numero1 * numero2;
    validarVacios(resultado,"multiplicacion");
}
function validarVacios(resultado, operacion) { // si no se ingresa un número int
    if(!isNaN(resultado)) {
        imprimirMensaje(resultado, operacion);
    } else {
        document.getElementById('result').textContent = "Debe ingresar valores numericos";
    }
}
function imprimirMensaje(resultado, operacion) {
    var mensaje = "El resultado de la " + operacion + " es: " + resultado;
    document.getElementById('result').textContent = mensaje;
}

// es muy similar que usa java :D