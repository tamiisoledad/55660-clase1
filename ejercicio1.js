const mostrarLista = arr => {
    if (arr.length === 0) {
        console.log('Lista vacia')
    } else {
        arr.forEach(element => {
            console.log(element)
        });
    }

    return `Longitud del array: ${arr.length}`
}

const arrayVacio = [];
const arrayConElementos = [1, 2, 3, 4]

let variable = mostrarLista(arrayVacio)

console.log(variable)
console.log(mostrarLista(arrayConElementos))