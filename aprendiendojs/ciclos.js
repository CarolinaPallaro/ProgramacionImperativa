const prompt = require("prompt-sync")({ sigint: true })

//mostrar del 1 al 10 
// for(let i = 1; i < 11; i++){
//     //bloque de codigo.
//     console.log(i);


//     if(i % 2 !== 0){
//         console.log(i);
//     }  
// }

// numero % 2 === 0 --> pares
// numero % 2 !== 0 --> impares


// let probandoFor = () =>{
// let contadorImpares = 0 
//     for( let i = 1; i <= 10; i++){

//             if(i % 2 !== 0){
//             contadorImpares = contadorImpares + 1
//             node }  
    
        
//     }
//     console.log(contadorImpares);
// }
// console.log(probandoFor());

// let siguientes = numero =>{
//         for(let i = numero + 1; i = numero + 10; i++){

//             console.log(i);
//         }
// }
// siguientes(8)

// CLASE MESA
//IMPRIME Imprimir los números entre el 5 y el 20, saltando de tres en tres.

// let impresorDe3 = numero =>{
//     for(let i = numero; i <= 20; i ++ ){
//         if (i % 3 === 0) {
//             console.log(i);

//         }
// }
// }
// console.log(impresorDe3(5));

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

// let siguientes = numero =>{
//     let siguientes = 0

//     for(let i = numero + 1; i <= numero + 1; i++){
//        siguientes = siguientes + 1
//     }
//         console.log();
// }


// let sumatoria = (numero) => {
//     let suma = 0;
//     for (let i = 0; i <= numero; i++) {
//         suma += i;
//     }
//     return suma;
//   }
//   console.log(sumatoria(100));


// Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

// const fibonacci = numero =>{
//     let a = 0;
//     let b = 1;
//     let c = 0;
//     for(let i = 0; i < numero; i++){
//         a + b;
//         a = b;
//         b = c;
//         console.log(c);
//     }
// }
// fibonacci(10);

// const fibo = (hasta) => {
//     let suma = 0; //2
//     let primero = 0;//1 
//     let segundo = 1;//1
    
//     do {
//         console.log(primero)
//         suma = primero + segundo;
//         primero = segundo;
//         segundo = suma;
//         // console.log(suma);
//     } while(suma <= hasta)

//     console.log(primero)
// }


// REPASO CLASE 2/6


//Escribí un programa que le pida al usuario ingresar una frase y
//la imprima en la consola.



// let frase = prompt ("ingrese aqui su frase")

// console.log(frase)


//Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de
// exclamación.

// let frase = prompt ("ingrese aqui su nombre")

// console.log(`Hola ${frase} !`) 


//Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.

    let PrimerNumero = prompt("Ingrese 1° numero: ")
    let SegundoNumero = prompt("ingrese su segundo numero: ")
    let suma  =  parseInt(PrimerNumero ) + parseInt(SegundoNumero)
    console.log(suma);
    

//https://playground.digitalhouse.com/course/8d44b470-ae8c-4097-9d8d-9418c68075c6/unit/7f463845-a04e-407d-a7e0-c74669a37e40/lesson/3486b4da-cd0c-4a2a-a5bb-175c69cf0130/topic/415e8f75-64e0-4823-ae19-2c234c2f2637 


//FIBO
// function fibo (numero){
//     let serie = [0, 1];

//     for(let i = 2; i <= numero; i++){
//         serie.push(serie [i - 1] + serie[i - 2]);
//     }

//     return [serie, serie[numero]]
// }

// console.log("Serie completa: ", fibo(10)[0]);
// console.log("Resultado Fib: ", fibo(10)[1]);