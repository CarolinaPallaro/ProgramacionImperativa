const prompt = require("prompt-sync")({ sigint: true });

function test1(x, y){
    return y - x 
}

test1(10,40) 

//esta funcion devuelve el valor 30.

//micro 2

function test2(x, y){
    return x*2
    console.log(x)
    return x / 2
}
test1(10)

//funciones simples 

function convertidorPulgadas(pulgadas){
    const CENTIMETROS = pulgadas*2.54
    console.log(`${pulgadas} son ${CENTIMETROS} cm`)
    return CENTIMETROS
}

convertidorPulgadas(prompt('ingrese pulgadas:'))

function stringToUrl(string) {
    let url = string.split(' ').join('-').toLowerCase();
    console.log(`www.${url}.com`);
    return url;
    }
stringToUrl(prompt('Ingrese un string: '));
