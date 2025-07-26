// DIA 2
let nombre = "Jaret";
const edad = 0;
let texto = "Hola mundo";       // string
let numero = 42;                // number
let activo = true;              // boolean
let lista = [1, 2, 3];          // array
let persona = { nombre: "Ana", edad: 20 }; // objeto

function saludar() {
    alert("Hola Jaret, ¡Bienvenido a JavaScript!");
}
console.log(nombre, edad);

function saludar2(nombre) {
    console.log("Hola " + nombre);
}

saludar2("Jaret");

function calcularEdad() {
    // COMPLETA ESTO
    // 1. Obtener el valor del input
    let annacim = parseInt(document.getElementById("anioNacimiento").value);
    let anioact = new Date().getFullYear();;
    // 2. Calcular la edad
    let edadact = anioact - annacim;
    // 3. Mostrar en el párrafo con id="resultado"
    alert("Hola " + nombre + " tu edad es " + edadact);
    document.getElementById("resultado").innerText = "Tienes " + edadact + " años.";
}



for (let i = 1; i <= 5; i++) {
    console.log("Vuelta " + i);
}

let i = 1;
while (i <= 3) {
    console.log("Hola");
    i++;
}
