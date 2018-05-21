import {
    LOAD_DECKS,
    ADD_DECK,
    ADD_CARD
} from '../utils/constants';

export const
    loadDecks = decks => ({
        type: LOAD_DECKS,
        decks
    }),

    addDeck = deckTitle => ({
        type: ADD_DECK,
        deckTitle
    }),

    addCard = (deckTitle, card) => ({
        type: ADD_CARD,
        deckTitle,
        card
    })
;
