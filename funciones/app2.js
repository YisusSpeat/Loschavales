// TIPOS DE FUNCIONES

// Normal:
function saludo1(nombre) {
    let frase = `Hola ${nombre} como estás`
    return frase;
};

// A través de un const
const saludo2 = function (nombre) {
    let frase = `Hola ${nombre} como estás`
    return frase;
}

//Con flechas

const saludo3 = (nombre)=> {
    let frase = `Hola ${nombre} como estás`
    return frase; 
};

// Como hemos creado una variable en el bloque de la función
// a la hora de nombrarla debemos definirla:

document.write(saludo1('pedro'))
document.write('<br>')

document.write(saludo2('robert'))
document.write('<br>')

document.write(saludo3('mario'))
document.write('<br>')

// EJEMPLOS Y TIPOS DE BUCLES:

// While:
let numero = 8;

while (numero <= 10 && numero > 0) {
    document.write(numero)
    numero--
};

document.write('<br>')
// Se ejecutará mientras la condición se cumpla

// Do while:
let numero2 = 10;
do {        //Primero la acción
    document.write(numero2)
    numero2--
} 
while (numero2 <= 10 && numero2 > 0);    //Después la condición

document.write('<br>')
// For:

// En el For normal primero debemos crear una variable (normalmente es i),
// Después debemos describir la condición
// Y por último si aumenta o decrementa (-- / ++)

for (i = 0; i <= 10 && i >= 0; i++){
    document.write(i)
}

// Programación orientada a objetos

// Conceptos básicos:

Clase: Es como la fábrica donde se generan estos objetos
Objeto: Es el resultado final de todos los componentes de la Clase
Atributo: Son las características del objeto que creamos 
Constructor: Aporta los atributos al objeto
Metodo: Son las funciones que realiza nuestro objeto
Instanciacion: Es cuando ya está creado nuestro objeto y lo declaramos

// Ejemplo:
-------Fabrica
class animal {
    ---------Constructor
                ------Atributos
    constructor(especie,edad,color){                                                  
        this.especie = especie;   ------This hace referencia al objeto que después creemos                                                    
        this.edad = edad;                                                             
        this.color = color;
        this.info = `Soy ${especie}, tengo ${edad} años, y soy de color ${color}`;
    }
    ---------Constructor
    --------Metodo
    verInfo(){
        document.write(this.info + '<br>')
    }
    --------Metodo
};
-------Fabrica

-------------Instanciacion
const perro = new animal('salchicha', 6, 'marrón');
-------------Instanciacion

Caracteristicas de la POO:

-Abstaccion: Resumir las caracteristicas a las caracteristicas principales
-Modularidad: Dividir/Trabajar por secciones
-Encapsulamiento: Agrupar todo de forma que no se pueda acceder desde otros lugares
-Polimorfismo: Capacidad de adaptar las funciones a según que objeto segun sus caracteristicas