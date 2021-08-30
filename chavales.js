    ///////ALCOHOLES
    let alcohol = prompt('Elige el alcohol: Vodka | Larios | Ron | Dyc')

    if (alcohol == 'vodka' || alcohol == 'Vodka') {
        alcohol = prompt('¿Que tipo de vodka? 1:Eristoff 2:Virgoroff 3:Smirnoff')
    }

    if (alcohol == 'larios' || alcohol == 'Larios') {
        alcohol = 13
    } else if (alcohol == 'virgoroff' || alcohol == 'Virgoroff' || alcohol == '2') {
        alcohol = 7
    } else if (alcohol == 'eristoff' || alcohol == 'Eristoff' || alcohol == 'smirnoff' || alcohol == 'Smirnoff' || alcohol == '1' || alcohol == '3') {
        alcohol = 11
    } else if (alcohol == 'ron' || alcohol == 'Ron') {
        alcohol = 15.5
    } else if (alcohol == 'dyc' || alcohol == 'Dyc' || alcohol == 'dYc' || alcohol == 'DyC') {
        alcohol = 18
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
    let vueltaOp = total / parseFloat(cantidadChavales).toFixed(2);

    for (i = 0; i < cantidadChavales;i++) {
        chavalesTotales[i] = [prompt(`Nombre del chaval ${i + 1}`),null];
    };
    alert(`Cada uno tiene que poner mínimo ${vueltaOp}`)
    for (i = 0; i < cantidadChavales;i++) {
        chavalesTotales[i][1] = prompt(`Dinero que pone ${chavalesTotales[i][0]}`)
    } 

    const Vuelta = ()=> {
        for (i = 0; i < cantidadChavales;i++) {
            document.write(`<b style="color:red;">${chavalesTotales[i][0]}</b> : ` + `${(parseFloat(Math.round(chavalesTotales[i][1] * 100) / 100).toFixed(2)  - vueltaOp)}€` + '<br>')
        }
    }

let resultado = `Dinero total de todo: ${total} <br> <hr style="color: black">
Cuanto tiene que poner cada uno: ${vueltaOp} <br> <hr style="color: black">
<b>Dinero de sobra</b> <br>
`
document.write(resultado) + Vuelta()
