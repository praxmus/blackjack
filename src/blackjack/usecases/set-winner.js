/**
 * Esta funcion determina y muestra una alerta del ganador
 * @param {Array<number>} puntosJugadores 
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputador] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputador === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computador gana');
        } else if (puntosComputador > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computador gana');
        }
    }, 100);
}