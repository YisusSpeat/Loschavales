    ///////ALCOHOLES
    let alcohol = prompt('Introduce que alcohol quieres')

    if (alcohol == 'larios' || alcohol == 'Larios') {
        alcohol = 13
    } else if (alcohol == 'vodka' || alcohol == 'Vodka') {
        alcohol = 8
    } else {
        alert('Error: Debes introducir un alcohol válido')
    }
    ///////////BEBIDAS
    let bebida = prompt('Que bebida quieres? 1: Fanta 2:CocaCola')

    if (bebida == 'coca' || bebida == 'Coca' || bebida == 'CocaCola' || bebida == 'cocacola' || bebida == 'Cocacola' || bebida == 'cocaCola' || bebida == '2') {
        let cantidad = prompt('Cuantas CocaColas van a ser?')
        bebida = 1.8 * parseFloat(cantidad)
    } else if (bebida == 'fanta' || bebida == 'Fanta' || bebida == '1') {
        let cantidad = prompt('Cuantas fantas van a ser?')
        bebida = 1.6 * parseFloat(cantidad)
    } else {
        alert('Error: Debes introducir una bebida válida')
    }
    ////////////VASOS Y RESULTADO
    let quererVasos = false;
    let vasos = prompt('Incluir vasos en el precio? 1:Si 2:No')
    let total = null;

        if (vasos == '1' || vasos == 'Si' || vasos == 'si') {
            let cantidad = prompt('Cuantos vasos van a ser?')
            quererVasos = true;
            let dineroVasos = parseFloat(cantidad) * 0.2;
            total = parseFloat(alcohol) + parseFloat(bebida) + parseFloat(dineroVasos);
        } else {
            total = parseFloat(alcohol) + parseFloat(bebida);
        }
        //////Cantidad Chavales
    let cantidadChavales = prompt('¿Cuantos chavales sois?');
    let chavalesTotales = []

    for (i = 0; i < cantidadChavales;i++) {
        chavalesTotales[i] = [prompt(`Nombre del chaval ${i + 1}`),null];
    };
    for (i = 0; i < cantidadChavales;i++) {
        chavalesTotales[i][1] = prompt(`Dinero que pone ${chavalesTotales[i][0]}`)
    } 

    let vueltaOp = total / parseFloat(cantidadChavales)
    const Vuelta = ()=> {
        for (i = 0; i < cantidadChavales;i++) {
            document.write(`<b style="color:red;">${chavalesTotales[i][0]}</b> : ` + `${(chavalesTotales[i][1] - vueltaOp)}€` + '<br>')
        }
    }

let resultado = `Dinero total de todo: ${total} <br> <hr style="color: black">
Cuanto tiene que poner cada uno: ${vueltaOp} <br> <hr style="color: black">
<b>Dinero de sobra</b> <br>
`
document.write(resultado) + Vuelta()