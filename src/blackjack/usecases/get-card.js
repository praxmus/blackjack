/**
 * Esta funcion permite al jugador tomar una carta
 * @param {Array<string>} deck 
 * @returns {string} retorna una carta
 */
export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw new Error("No hay cartas en el deck");
    }

    return deck.pop();
}