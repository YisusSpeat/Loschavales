// Problema 1 (Revisar que tienen mas de 18 y si es el primero despues de las 2 no paga entrada)
// let cantidadAlumnos = prompt('¿Cuantos alumnos hay?')
// let alumnosTotales = [];

// for (i = 0; i < cantidadAlumnos; i++) {
//     alumnosTotales[i] = [prompt(`Nombre del jugador ${i + 1}`),0]
// };

// const registro = (nombre,p)=> {
//     let presencia = prompt(nombre);
//     if (presencia == 'p' || presencia == 'P') {
//         alumnosTotales[p][1]++
//     };
// };

// for (i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales) {
//         registro(alumnosTotales[alumno][0],alumno)
//     };
// };

// for (alumno in alumnosTotales) {
//     let resultado = `<b>Alumno:</b> ${alumnosTotales[alumno][0]} <br>
//     <b>Presencias:</b> ${alumnosTotales[alumno][1]} <br>
//     <b>Ausencias:</b> ${30 - alumnosTotales[alumno][1]} <br>`

//     if (30 - alumnosTotales[alumno][1] > 5) {
//         resultado += `<b style="color:red">Suspenso por acumulación de ausencias</b> <br> <br>`
//     } else {
//         resultado += `<br>`
//     }
//     document.write(resultado);
// }

let free = true

const entrada = hora=> {
    let edad = prompt('Que edad tienes?')
    if (edad > 18) {
        if (hora >= 2 && hora < 7 && free == true) {
            alert('Puedes entrar gratis')
            free = false;
        } else {
            alert('Puedes pasar pero debes de pagar')
        }
    } else {
        alert('No eres mayor de edad')
    }
}

const suma = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2);
};
const resta = (num1,num2)=> {
    return parseInt(num1) - parseInt(num2)
};
const mutliplicacion = (num1,num2)=> {
    return parseInt(num1) * parseInt(num2)
}
const division = (num1,num2)=> {
    return parseInt(num1) / parseInt(num2)
}


const calculadora = ()=>{
    let elegir = prompt ('1:Sumar | 2:Restar | 3:Multiplicar | 4:Dividir')

if (elegir == 1) {
    let numero1 = prompt ('Ingresa el primer número para sumar')
    let numero2 = prompt('Ingresa el segundo número para sumar')
    resultado = suma(numero1,numero2)
    document.write(`Tu resultado es: <b>${resultado}</b>`)
} else if (elegir == 2) {
    let numero1 = prompt ('Ingresa el primer número para ser restado')
    let numero2 = prompt('Ingresa el segundo número para restar')
    resultado = resta(numero1,numero2)
    document.write(`Tu resultado es: <b>${resultado}</b>`)
} else if (elegir == 3) {
    let numero1 = prompt ('Ingresa el primer número para multiplicar')
    let numero2 = prompt('Ingresa el segundo número para multiplicar')
    resultado = mutliplicacion(numero1,numero2)
    document.write(`Tu resultado es: <b>${resultado}</b>`)
} else if (elegir == 4) {
    let numero1 = prompt ('Ingresa el primer número para ser dividido')
    let numero2 = prompt('Ingresa el segundo número para dividir')
    resultado = division(numero1,numero2);
    document.write(`Tu resultado es: <b>${resultado}</b>`)
} else {
    alert('Operación Errónea')
}
}

//////////Objetos

class Animal {
    constructor(especie,edad,color) {
        this.especie = null;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}.`
    }
    get getInfo(){
        return this.info
    }
    set setEspecie(newName){
        this.especie = newName;
    }
    get getEspecie(){
        return this.especie;
    }
}

const perro = new Animal('perro',5,'marron')
////////////////////////////
class Moviles {
    constructor(color,peso,rdp,rdc,ram,almacenamiento){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.encendido = false;
        this.info = `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}g </b><br>
        Tamaño de Pantalla: <b>${this.rdp}" </b><br>
        Resolución de Cámara: <b>${this.rdc}</b><br>
        Ram: <b>${this.ram}GB</b><br>
        Encendido: <b>${this.encendido}</b><br>
        `;
    }; 
    encenderApagar(){
        if (this.encendido == false) {
            alert('Movil encendido')
            this.encendido = true;
        } else {
            alert('Apagando el movil')
            this.encendido = false;
        }
    };

    reiniciar(){
        if (this.encendido == true) {
            alert('Movil reiniciandose');
        }else {
            alert('El movil está apagado');
        };
    };
    
    sacarFoto(){
        if (this.encendido == true) {
            alert(`Foto tomada con una calidad de ${this.rdc}`)
        } else {
            alert('Acción imposible ya que el movil está apagado');
        }
    }

    grabarVideo(){
        if (this.encendido == true) {
            alert(`Grabando video en la calidad de ${this.rdc}`);
        } else {
            alert('Acción imposible ya que el movil está apagado');
        };
    };

    movilInfo() {
        if (this.encendido == false) {
            alert('El movil está apagado')
        } else {
            document.write(this.info + '<br>');
        }
    }
    
    almacenamientoMoviles() {
        return this.almacenamiento
    }
};

class altaGama extends Moviles {
    constructor(color,peso,rdp,rdc,ram,almacenamiento,rdce) {
        super(color,peso,rdc,rdp,almacenamiento,ram)
        this.rdce = rdce;
        this.infoAdicional = `Resolución de cámara 2: <b>${this.rdce}</b> <br>`
    };

    camaraLenta() {
        if (this.encendido == false) {
            alert('El movil debe estar encendido')
        } else {
            alert('Grabando en camara lenta con una resolución de ' + this.rdce)
        };
    };

    desbloqueoFacial() {
        if (this.encendido == false) {
            alert('El movil debe de estar encendido')
        } else {
            alert('Reconocimiento facial en curso')
        };
    };

    altaGamaInfo() {
        document.write(this.info + this.infoAdicional);
    };
};

class App extends Moviles {
    constructor(descargas,puntuacion,peso,almacenamiento) {
        super(almacenamiento)
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.info = `<b style="color: red">Información de la App</b><br>
        Descargas: ${this.descargas} <br>
        Puntuación: ${this.puntuacion} <br>
        Peso: ${this.peso} <br>
        `
    }
    descargar() {
        let pesoApp = this.peso;
        if (parseInt(this.almacenamientoMoviles()) >= parseInt(this.peso)) {
            alert('App descargada con exito');
            let almacenamientoMovil = parseInt(almacenamientoMovil) - parseInt(pesoApp)
            document.write(`Almacenamiento Disponible: ${almacenamientoMovil}`)
        } else {
            alert('No tienes suficiente espacio')
        };
    }
}

// let array1 = [5,6,7,8,9];
// let array2 = [1,2,3,4,array1];

// for (i = 0;i < array2.length;i++){
//     if (array2[i] == array2[4]){
//         for (array in array1){
//             document.write(array1[array] + '<br>')
//         } 
//     } else if (array2[i] > 4) {
//         continue
//     } else {
//         document.write(array2[i] + '<br>')
//     }
// }