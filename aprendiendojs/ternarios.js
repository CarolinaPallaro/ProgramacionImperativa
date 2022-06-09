const prompt = require("prompt-sync")({ sigint: true });
// // 
// let fruta = "Manzana";

// let resultado = fruta == "Manzana" ? "buenisimo, me gusta la manzana": "ufa, queria manzana";
// console.log( resultado);

let probandoElseIf = (numero)=>{

    if( numero > 5){
    //BLOQUE
        console.log("estoy dentro del IF");
    }else if(numero === 5){
    //BLOQUE
        console.log("estoy dentro del ELSE IF");

    }else{
    //BLOQUE
    console.log("estoy dentro del ELSE");

    }

}
probandoElseIf(6)



 
