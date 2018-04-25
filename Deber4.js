/*Ejercicio 1
function validarNumeroDeStringsEnArreglo(arreglo)
{
    var contadorStrings=0;
    for(i=0;i<arreglo.length;i++)
    {
        if((typeof arreglo[i]).localeCompare("string"))
        {
            contadorStrings++;
        }
    }
    return contadorStrings;

}

var vector = [1,'hola',3.34,'raul', true,'poli'];
//var numeroDeCadenas;
console.log("El numero de String en el arreglo son: "+validarNumeroDeStringsEnArreglo(vector));

*/
//Ejercicio 2
/*
var generadoresTipo1 = [62, 62, 62, 62];
var generadoresTipo2 = [124,124,124,124,124,124,124,124,124,124,124,124,124,124,124];
var stdin = process.openStdin();
console.log("Generadores empresa electrica\n1. Activar todos los generadores\n2. Activar los generadores impar\n3. Activar los generadores par\n4. Salir");
console.log("Escoja una Opcion");
//console.log('hola'+stdin.toString().trim());
stdin.addListener("data", function(d) {
    if(d==1)
    {
        console.log("Todos los generadores activados");
        imprimirConsumo(generadoresTipo1,generadoresTipo2,1);
    }
    else if(d==2)
    {
        console.log("Generadores impar activados");
        imprimirConsumo(generadoresTipo1,generadoresTipo2,2);
    }
    else if(d==3)
    {
        console.log("Generadores par activados");
        imprimirConsumo(generadoresTipo1,generadoresTipo2,3);;
    }
    else
    {
        System.exit;

    }
});

function imprimirConsumo(tipo1, tipo2, opcion)
{
    var contador=0;
    suma=0;
    while(contador<4)
    {
        if(opcion==1)
        {
            suma=suma+tipo1[contador];
            console.log(contador+1+":Generador #"+(contador+1)+" esta prendido, añadiendo "+tipo1[contador]+" MW para un total de "+suma);
            contador++;
        }
        else if(opcion==2)
        {
            if(contador%2==0)
            {
                suma=suma+tipo1[contador];
                console.log(contador+1+":Generador #"+(contador+1)+" esta prendido, añadiendo "+tipo1[contador]+" MW para un total de "+suma);
                contador++;
            }
            else
            {
                console.log(contador+1+":Generador #"+(contador+1)+" esta apagado");
                contador++;
            }
        }
        else
        {
            if(contador%2!=0)
            {
                suma=suma+tipo1[contador];
                console.log(contador+1+":Generador #"+(contador+1)+" esta prendido, añadiendo "+tipo1[contador]+" MW para un total de "+suma);
                contador++;
            }
            else
            {
                console.log(contador+1+":Generador #"+(contador+1)+" esta apagado");
                contador++;
            }
        }

    }
    for(i=0;i<tipo2.length;i++)
    {
        if(opcion==1)
        {
            suma=suma+tipo2[i];
            console.log(contador+1+":Generador #"+(contador+1)+" esta prendido, añadiendo "+tipo2[i]+" MW para un total de "+suma);
            contador++;
        }
        else if(opcion==2)
        {
            if(i%2==0)
            {
                suma=suma+tipo2[i];
                console.log(contador+1+":Generador #"+(contador+1)+" esta prendido, añadiendo "+tipo2[i]+" MW para un total de "+suma);
                contador++;
            }
            else
            {
                console.log(contador+1+":Generador #"+(contador+1)+" esta apagado");
                contador++;
            }
        }
        else
        {
            if(contador%2!=0)
            {
                suma=suma+tipo2[i];
                console.log(contador+1+":Generador #"+(contador+1)+" esta prendido, añadiendo "+tipo2[i]+" MW para un total de "+suma);
                contador++;
            }
            else
            {
                console.log(contador+1+":Generador #"+(contador+1)+" esta apagado");
                contador++;
            }
        }

    }

    //console.log("Se acabo");
    console.log("Generadores empresa electrica\n1. Activar todos los generadores\n2. Activar los generadores impar\n3. Activar los generadores par\n4. Salir");
    console.log("Escoja una opcion");

}
*/


//Ejercicio 3
var numeroDeOsosDeAnteojosInicial=12;
var numeroDeMeses=0;

console.log("Despues de cuantos meses desea calcualr la poblacion de osos");
var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    numeroDeMeses=d;
    calcularPoblacion(numeroDeOsosDeAnteojosInicial, numeroDeMeses);
});

function calcularPoblacion(poblacion,meses)
{
    var poblacionParcial=poblacion;
    for(i=0;i<meses;i++)
    {
        poblacionParcial=poblacionParcial*4;
        if(poblacionParcial>=10000)
        {
            poblacionParcial=poblacionParcial/2;
            console.log("Removiendo "+poblacionParcial+" osos de anteojos de la poblacion");
            console.log("Van a existir "+poblacionParcial+" osos de anteojos despues del mes "+(i+1));
        }
        else
        {
            console.log("Van a existir "+poblacionParcial+" osos de anteojos despues del mes "+(i+1));
            //console.log("La poblacion para el día "+i+" es de "+poblacionParcial);
        }
    }
}
