import { valorCarta } from './card-value'

/**
 * Esta funcion muestra y retorna el total de puntos acumulados por jugador
 * @param {string} carta 
 * @param {number} turno 
 * @param {Array<number>} puntosJugadores
 * @param {NodeListOf<HTMLElement>} puntosHTML 
 * @returns {Array<number>} retorna el total de puntos acumulados por jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}