/*console.log('Hola mundo!');
var nombre = 'Raul';
var apellido = 'Molina'
var edad = 28;
imprimirEnConsola: function () {
    console.log(this.nombre + ''+
    this.apellido + '' + this.edad)
}

usuario.imprimirEnConsola();
//var deudas = 223.21;
//var fechaNacimiento = new Date();
//var casado = false;
//var noEstoyDefinido=undefined;
/*
if(estoyVacio)
{
    console.log('Verdadero');
}
else
{
    console.log('Falso');
}

//Json
*/
/////////////////////////////////////
var usuario = {
    nombre:"Raul",
    apellido: 'Molina',
    edad: 26,
    imprimirEnConsola: function () {
    console.log(this.nombre + ''+
    this.apellido + '' + this.edad)
}
};
/////////////////////////////////////
usuario.imprimirEnConsola();
/*
console.log(usuario.nombre); //"Raul"
console.log(usuario); //??
delete usuario.edad;
console.log(usuario);
usuraio.cedula = '1723088033';
console.log(usuario);
usuario.mascotas.nombre = 'Cachetes';
cosole.log(usuario);

var numeroUno=5;
var numeroDos=10;

function sumarDosNumeros(numeroUno, numeroDos)
{
    return numeroUno+numeroDos;
}

console.log("El resultado es:"+sumarDosNumeros(1,2));

*/
//Funcion anonima
/*
var numeroUno=5;
var numeroDos=10;

var sumarDosNumerosVersionTres = function(numeroUno, numeroDos)
{
    return numeroUno+numeroDos;
}
console.log("resultado"+sumarDosNumerosVersionTres)
*/

imprimirEnConsola: function sumarDosNumeros() {
    console.log(this.nombre + ''+
        this.apellido + '' + this.edad)
}

console.log(usuario.imprimirEnConsola);

var usuario = {
    nombre:"Raul",
    apellido: 'Molina',
    edad: 26,
    imprimirEnConsola: function () {
        console.log(this.nombre + ''+
            this.apellido + '' + this.edad)
    }
};

var mutar;
var edad=26;
mutar = edad;
var deudas=2.3;
mutar =deudas;
mutar= sumarDosNumeros;


var arreglo = [
    1,
    2,
    3,
    "Raul",
    2.2,
    true,
    undefined,
    null,
    {
        nombre:"Raul"
    },
    sumarDosNumeros(1,2),
    sumarDosNumeros,
    [1,2,3,true]
];