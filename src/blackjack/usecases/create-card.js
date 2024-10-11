/**
 * Esta funcion agrega la carta obtenida por el jugador
 * @param {string} carta 
 * @param {number} turno 
 * @param {NodeListOf<Element>} divCartasJugadores 
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.alt = `Imagen de carta ${carta}`;

    divCartasJugadores[turno].append(imgCarta);
}