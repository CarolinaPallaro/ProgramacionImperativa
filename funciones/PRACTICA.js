const prompt = require("prompt-sync")({ sigint: true });

// //suma

let sumar = (a=prompt("ingrese un numero:"), b=prompt("ingrese otro numero:"), c=prompt("ingrese un numero:")) => parseInt(a)+parseInt(b)+parseInt(c)



// //restar

// let restar = (a=prompt("ingrese un numero: "), b=prompt("ingrese otro numero: "))=>{
//     return parseInt(a)-parseInt(b)
// }

//multiplicar

let multiplicar = (a=prompt("ingrese un numero: "), b=prompt("ingrese otro numero: "))=>{
    return parseInt(a)*parseInt(b)
}


// //dividir

// let dividir = (a=prompt("ingrese un numero: "), b=prompt("ingrese otro numero: "))=>{
//     return parseInt(a)/parseInt(b)
// }

// console.log(sumar())

// console.log (restar())
// console.log(multiplicar());
// console.log(dividir());


// let dividirx0 = (x=prompt("ingrese un numero"), y)=> {
// return  x / 0}

// console.log(dividirx0(3, 0));

let promedioDeTresNumeros = (a, b, c) =>  sumar (a, b, c) / 3; 
console.log( promedioDeTresNumeros (3, 3, 3)); 

let calcularPorcentaje = (a, b) => multiplicar (a, b) / 100;
console.log( calcularPorcentaje (300, 15))

let generadorDePorcentaje = (a, b) => multiplicar (a / b) * 100;
console.log( (generadorDePorcentaje (2, 200)));

