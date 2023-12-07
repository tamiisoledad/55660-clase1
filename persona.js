class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }

    static especie = 'humano'

    saludar = () => {
        console.log(`Hola soy ${this.nombre}`)
    }

    getEspecie = () => {
        console.log(`Mi especie es ${Persona.especie}`)
    }
}

let persona1 = new Persona('Jorge')
let persona2 = new Persona('Pepe')

persona1.saludar()
persona2.saludar()
persona1.getEspecie()
persona2.getEspecie()