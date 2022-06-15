// Crear un array llamado misMascotas 

let misMascotas = []

// crear 3 objetos para 3 mascotas diferentes 

let reproducirSonido = function (){
    return this.sonido + ' ' + this.sonido
}

let mascota1 = {
    nombre: 'Siria',
    raza: 'Gato',
    edad: 3,
    sonido: 'miau',
    hacerSonido: reproducirSonido,

}

let mascota2 = {
    nombre: 'Geminis',
    raza: 'Perro',
    edad: 7,
    sonido: 'guau',
    hacerSonido: reproducirSonido,

}

let mascota3 = {
    nombre: 'Pipa',
    raza: 'Unicornio',
    edad: 7,
    sonido: 'hiiiiiii',
    hacerSonido: reproducirSonido,

}

// console.log(mascota1.hacerSonido());



// Cada objeto deberá tener: 
// nombre
// raza
// edad 
// sonido
// y un método que nos retorne ese sonido 2 veces



// Agregar al array (misMascotas)
// Cuando esté listo, verificar por consola

misMascotas.push(mascota1, mascota2, mascota3)

// console.log(misMascotas);

//para solamente llamar  a un objeto del array
// console.log(misMascotas[2].reproducirSonido);

// Deberemos crear una función que se llame aumentarEdad que aumente 
// la edad de cada animal en 1.

// Ahora debemos crear otra función, que se llame  aumentarEdad2, 
// que va a hacer un trabajo más fino:

// Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// Si la mascota tiene más de 10 años,deberá sumarle la mitad de su edad

// Ahora crearemos una función que va a generar un identificador (ID) 
// en cada objeto, que será secuencial y que empezará en 1.

// Por último eliminaremos la propiedad ‘raza’ , 
// ya que para nosotros todos los animalitos son iguales 💘💞



const aumentarEdad = (arr) =>{
for (let i = 0; i < arr.length; i++) {
    arr[i].edad += 1    
    
    } 

}

// aumentarEdad(misMascotas);
// console.log(misMascotas);


const aumentarEdad2 = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].edad < 6){
            arr[i].edad += 1     
        }  else if (arr[i].edad >= 6 && arr[i].edad <=10 ){
            arr[i].edad += 2
        }else{
            arr[i].edad = arr[i].edad + (arr[i].edad / 2)
            
        }
    }
}
// aumentarEdad2(misMascotas)
// console.log(misMascotas);

const generarid = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        //id no existe pero js se lo agrega al objeto
    arr[i].id = i + 1
    }
}
// generarid(misMascotas)
// console.log(misMascotas);


const eliminarRaza = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
    delete arr[i].raza  
        }
}

eliminarRaza(misMascotas)
console.log(misMascotas);

