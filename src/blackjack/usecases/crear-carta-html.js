

/**
 * 
 * @param {String} carta Carta del juego, Ejemplo: '2CS'
 * @returns {HTMLImageElement} Retorna un elemento imagen HTML
 */
export const crearCartaHTML = ( carta ) =>{

    if (!carta) throw new Error('Argumento carta es obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}

    