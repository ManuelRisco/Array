// Array vacio
let array = [];

// Array con valores
let arraylleno = [10,20,30,40];
const edades = [15,20,30,60,80];
console.log(arraylleno[0]);

arraylleno.unshift(0); // agrega al principio valores
arraylleno.push(Infinity); // agrega al final valores

console.log(arraylleno);

arraylleno.shift(); // elimina el primer valor
console.log(arraylleno);
arraylleno.pop(); // elimina el ultimo valor
console.log(arraylleno);

for (let i=0; i< edades.length; i++){
    console.log(edades[i]);
}

for (let edad of edades) {
    console.log(`La edad con for of es: ${edad}`);
}




// foreach

const nombres = ['abel', 'carlos', 'carla', 'camilo', 'belen'];

nombres.forEach((cadaElemento) => console.log(cadaElemento));