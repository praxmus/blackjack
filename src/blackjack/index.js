import { crearDeck, pedirCarta, crearCarta, acumularPuntos, turnoComputador } from './usecases'

/** 
* C = Clovers
* D = Diamonds
* H = Hearts
* S = Spades
**/

const modulo = (() => {
    'use strict'

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerText = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    const ejecutarTurnoComputador = () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(puntosJugadores, deck, puntosHTML, divCartasJugadores);
    }

    let deck = [];

    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugadores = [];

    // Referencias HTML

    const btnNuevoJuego = document.querySelector('#btn-nuevo');
    const btnPedir = document.querySelector('#btn-pedir');
    const btnDetener = document.querySelector('#btn-detener');
    const puntosHTML = document.querySelectorAll('small');
    const divCartasJugadores = document.querySelectorAll('.div-cartas');

    // Eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

        crearCarta(carta, 0, divCartasJugadores)

        if (puntosJugador > 21) {
            ejecutarTurnoComputador();
        } else if (puntosJugador === 21) {
            ejecutarTurnoComputador();
        }
    });

    btnDetener.addEventListener('click', () => {
        ejecutarTurnoComputador();
    });

    btnNuevoJuego.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };
})();

