//objetos literales
//siempre asigno valores con  :

//let arr = []
// let obj = {}

//compuesto por propiedades y metodos
//propiedades = caracteristicas 
//metodos = funciones.

        //Compuestos por pares de clave : valor (raza)


// let perro = {
//     raza: "pichicho",
//     edad: 2,
//     esMacho: false,
//     ladrar: function(){
//         //los metdos se asignan con funcion
//         return "wuaaau wuaaauuu"
//     },

//     saltar: function(){
//       return "estoy saltando"  
//     }
// }


// let arr = [12, 15, 19]
// console.log( arr[2]);

// //si quiero ver algo interno de un objeto accedo en base a propiedad o metodo.

// console.log( perro.edad());


//con () ejecuto la funcion en console.log -->para los metodos

// la palabra THIS hace referencia al nombre de la variable. 
// // DECLARADAS
// function saludar(){

// }

// // EXPRESADAS
// //COMUN
// let saludar2 = function(){

// }
// // TIPO FLECHA
// let saludar3 = ()=>{
    
// }

//metodo que devuelva el promedio
// let persona = {
//     nombre: "pablo",
//     apellido: "perez",
//     notas: [10, 7, 4],
//     promedio: function(){
//         //todo lo que recibo x parametro cuando llame lo tengo que declarar
//         //CICLO FOR para recorrer arreglo y en cada vuelta sumarlo
        
//         let acc = 0
//         for(let i = 0; i < this.notas.length; i++){
//             acc += this.notas[i];
//         }

//     return acc / this.notas.length
//     }

// }

// console.log( persona.promedio() );


// //ejemplo

// let arr = [12, 14, 21] 

// for (let i = 0; i < arr.length; i++){

//     console.log(arr[i]);
// }


// //MANIPULACION DE OBJETOS. objeto mas "." y "=" para asignar o reasignar por fuera

// console.log(persona);
// persona.edad = 20
// persona.nombre = "maria" 
// console.log(persona);

// // (palabra reservada lo elimina) delete  persona.apellido


// //ARRE

// let estudiantes = [
//     {
//         //aca un objeto
//     },
//     {
//         //aca otro
//     }
// ]



// mesa BANCO
// Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.



let arrcuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },

]

let banco = {
    clientes: arrcuentas,
    consultarClientes: function (titular){
        let clienteEncontrado = 0;
        for (let i = 0; i < arrcuentas.length; i++){
            
        if(titular == arrcuentas[i].titularCuenta){
            clienteEncontrado += i;
        }      
    }
return arrcuentas[clienteEncontrado];
},

    deposito: function(titular, depo){
    let clienteaDepositar = 0;
        
        for (let i = 0; i < arrcuentas.length; i++){
            
            if(titular == arrcuentas[i].titularCuenta){
            clienteaDepositar += i;
            }
            
        }
        arrcuentas[clienteaDepositar].saldoEnPesos += depo;
        return  arrcuentas[clienteaDepositar].saldoEnPesos 
},

    

}
console.log(banco.deposito("Jacki Shurmer", 5000000)  )






