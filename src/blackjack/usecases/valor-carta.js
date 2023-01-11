

/**
 * 
 * @param {String} carta String con el nombre de la carta
 * @returns {Number} Retorna el valor de la carta entre 1 y 11
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}