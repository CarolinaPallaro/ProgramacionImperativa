const prompt = require("prompt-sync")({ sigint: true });
// en código las variables son sobres/cajitas (espacios en memorias) donde vamos a almacenar algo para utilizarlo más adelante 

// 2 formas de crearlas  palabra reservada (palabra ya creada que tiene una funcion)

// 4 palabras:  Descriptiva - nombre - signo igual - valor

// let  = operador de asignación 

// EJ: cuando la creo por primera vez, se puede rehacer. Const no!
//Const nombre = "jorge"

//Declarar es crearla  Reasignar valor es cambiar valor 

//let edad = 25





// tipos de datos

//strings / numb / booleanos

    //strings: cadena de texto concatenada 

const nombre = "Carolina" // ´carolina´ 
    // nombre = "Carolina" ESTO NO SE PUEDE CON CONSTTTTT

console.log( nombre )


//NUMBER_ si no quiero un texto pongo numeros (num enteros o decimales 25.6)

let edad = 29
    // edad = 26 

// BOOLEANOS / BOOL == verdadero o falso 

//EJ:  
let tienePerros = true  

let isLogged = true

// OPERADORES MATEMATICOS + - / * %

console.log(edad * 2)

console.log( 11 % 2 ) //pra determinar si un numero es par o no. 

// EL + se puede usar con streaming 

let apellido = "Pallaro"

// BACKSTIKS 
// console.log ( "hola" + "Pallaro" + "como estas?" )

// EN LUGAR DE "" USO:
//CONSOLE.LOG( `HOLA ${APELLIDO}´ como estas?´) //--> TEMPLATE LITERALS 

// OPERADORES DE COMPARACION > < != !== === 