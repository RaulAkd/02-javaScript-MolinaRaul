var nombre = 'Raulakd';
nombre = 'Raul';
var cedula = '1723088033';
//cedula = '123124124'; Variable constante no se puede reasignar. Variable solo de lectura.
var apellido = 'Molina';
//apellido=1;
apellido = {};
var edad = 1;
var casado = false;
var fechaNacimiento = new Date();
var usuario = {
    nombre: 'Raul',
    edad: 26
};
var Usuario = /** @class */ (function () {
    function Usuario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    return Usuario;
}());
var raul = new Usuario('Raul', 26);
console.log(raul);
/*imprimirEnOCnsola()
{
    //template strings
    return `Mi nombre es: $(this.nombre), y
    mi edad es: $(this.edad)`;

}*/
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _edad) {
        this.nombre = nombre;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "fullName", {
        get: function () {
            return this._edad;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioDos.prototype, "edad", {
        set: function (nuevaEdad) {
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    return UsuarioDos;
}());
var raul2 = new UsuarioDos('Raul', 26);
console.log('raul2', raul);
//Ponieindo ? decimos que la propiedad es opcional, evita que se deba definir varios constructores.
var rpm = {
    nombre: 'Rpm',
    edad: 25,
    esposa: new Usuario('Fer', 22)
};
