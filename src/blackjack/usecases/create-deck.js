import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if (!tiposCarta || tiposCarta.lenght > 0) throw new Error("TiposCarta es obligatorio como un arreglo de string")
    if (!tiposEspeciales || tiposEspeciales.lenght > 0) throw new Error("TiposCarta es obligatorio como un arreglo de string")

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo);
        }
    }

    for (let especial of tiposEspeciales) {
        for (let tipo of tiposCarta) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
}