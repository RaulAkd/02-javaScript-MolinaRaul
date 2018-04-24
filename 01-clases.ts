let nombre: string = 'Raulakd';
nombre='Raul';
const cedula = '1723088033';
//cedula = '123124124'; Variable constante no se puede reasignar. Variable solo de lectura.
let apellido: any = 'Molina';
//apellido=1;
apellido = {};

let edad: number =1;
let casado:boolean = false;
let fechaNacimiento:Date = new Date();

let usuario = {
    nombre: 'Raul',
    edad:26
};

class Usuario
{
    public nombre:string;
    private edad: number;

    constructor(mNombre: string, mEdad:number)
    {
        this.nombre=mNombre;
        this.edad=mEdad;
    }
}

let raul = new Usuario('Raul',26);
console.log(raul);


/*imprimirEnOCnsola()
{
    //template strings
    return `Mi nombre es: $(this.nombre), y
    mi edad es: $(this.edad)`;

}*/

class UsuarioDos
{
    constructor(public nombre:string, private _edad:number)
    {

    }
    get fullName():number
    {
        return this._edad;
    }

    set edad(nuevaEdad:number)
    {
        this._edad = nuevaEdad;
    }
}



let raul2 = new UsuarioDos('Raul',26);

console.log('raul2', raul);

interface UsuarioTres{
    nombre:string;
    edad:number;
    esposa?: Usuario;
}
//Ponieindo ? decimos que la propiedad es opcional, evita que se deba definir varios constructores.
let rpm: UsuarioTres = {
    nombre: 'Rpm',
    edad: 25,
    esposa: new Usuario('Fer',22)
};


