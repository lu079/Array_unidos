//EJERCICIO 1

const array = [
    { num: 1}, 
    { num: 100},
    { num: 200},
    { num: 2},
    { num: 15},
    { num: 23},
    { num: 233},
    { num: 5},
    { num: 555},
    { num: 854},
    { num: 999},
    { num: 12},
];

//Números de menor a mayor
const orden = array.sort( (el1, el2) => {
    return el1.num - el2.num 
});
console.log(orden);
//último número
console.log("Presione la siguiente flecha para conocer el número Mayor");
let mayor = orden.slice(orden.length -1);
console.log(mayor);


//Números de mayor a menor 
const orden2 = array.sort( (el1, el2) => {
    return el2.num - el1.num 
});
console.log(orden2);
//Primer número
console.log("Presione la siguiente flecha para conocer el número Menor");
let menor = orden2.slice(orden2.length -1); 
console.log(menor);



//EJERCICIO 2

let frase = 'tratamos con una palabra grande para ver su longitud: "otorrinolaringología"';
console.log(frase); 

console.log(frase.length);

function dividir (oracion, separar){
    let unificadas = oracion.split(separar);
    console.log('La frase es: ' + '"' + oracion + '"');
    console.log('El separador es: "' + separar + '"');
    console.log("El array tiene " + unificadas.length + " elementos: ");

    for (var i = 0; i < unificadas.length; i++){
        console.log(unificadas[i] + " / ");
    }
}

let espacio = " ";

dividir(frase);



//EJERCICIO 3
function cambio(frase) {
    return frase.split('').reverse().join('');
}
console.log(cambio("anita lava la tina"));
