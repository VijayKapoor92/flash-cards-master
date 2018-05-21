import {
    LOAD_DECKS,
    ADD_DECK,
    ADD_CARD
} from '../utils/constants';

const decks = (state = {}, action) => {
    const { decks, deckTitle, card } = action;
    switch(action.type) {
        case LOAD_DECKS:
            return {
                ...state,
                ...decks
            };
        case ADD_DECK:
            return {
                ...state,
                [deckTitle]: {
                    title: deckTitle,
                    questions: []
                }
            };
        case ADD_CARD:
            if (state[deckTitle]) {
                const {question, answer} = card;
                return {
                    ...state,
                    [deckTitle]: {
                        ...state[deckTitle],
                        questions: [
                            ...state[deckTitle].questions,
                            {
                                question,
                                answer
                            }
                        ]
                    }
                }
            }
            break;
        default:
            return state;
    }
};

export default decks;
