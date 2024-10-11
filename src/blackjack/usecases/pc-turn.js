import { determinarGanador, crearCarta, acumularPuntos, pedirCarta } from './'

/**
 * Esta funcion ejecuta el turno de la computadora
 * @param {Array<number>} puntosJugadores 
 * @param {Array<string>} deck 
 * @param {NodeListOf<HTMLElement>} puntosHTML
 * @param {NodeListOf<Element>} divCartasJugadores
 */
export const turnoComputador = (puntosJugadores, deck, puntosHTML, divCartasJugadores) => {

    let [puntosMinimos, puntosComputador] = puntosJugadores;

    do {
        const carta = pedirCarta(deck);
        puntosComputador = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores)
    } while ((puntosComputador < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}