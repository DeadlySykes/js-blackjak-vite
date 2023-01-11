


// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) throw new Error('deck es obligatorio como un arreglo de strings')

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}