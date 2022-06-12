// https://www.youtube.com/watch?v=PescFjv1UXM pagina de resueltos. 

//Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales

//al anterior, si no son numeros o son menores o iguales a cero, que los vuelva a pedir

//utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
//en un prompt poner N° negativo, cortar ejecucion del bucle y realizar la sumna de todos los datos 
//introducidos. AARAY para guardar los datos que se van introduciendo en el form

//programa que muestre todos los numeros intermedios introducidos por el usuario 

//que muestre todos los numeros divisores de un numero introducido en un promt

//Programa que pida 6 numeros por pantalla y los guarde en un array

//ordenar el array anterior y mostrarlo 

//invertir el orden del array anterior y mostarlo por consola

// Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:
// 1 - Funcion que reciba un array de edades y retorne el promedio 
// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array

//    {
//       edadesMenor : "// edades menor a 18",  
//       edadesMayor : "// edades menor a 18"
// //    }

// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero tambien de forma imperativa (for if)



//Strings

//.lenght()

let texto = 'practicando en un dia lluvioso';
console.log(texto.length);




//.indexOf()

console.log(texto.indexOf('dia'));
//si ingreso una palabra qn esta en el texto devuelve -1




//.slice()

console.log(texto.slice(0, 15));




//.trim()
//Elimina espacios en blanco antes y despues de la 1er ocurrencia de un caracter

console.log(texto.trim());




//. split() Permite convertir String en Array 
console.log(texto.trim(" ")); //separa caracteres que ahora son parte de un array separados por ","
//el delimitador puede ser cualquier caracter





//.replace(loQue buscas, su reemplazo) son los parametros.

console.log(texto.replace('lluvioso', 'soleado'));




