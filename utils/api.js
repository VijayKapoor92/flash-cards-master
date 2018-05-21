import React from 'react';
import { AsyncStorage } from 'react-native';
import { initialState } from "./initialState";

const DECKS_STORAGE_KEY = 'flash-cards:decks';

export const

    fromStorage = response =>
        JSON.parse(response),

    toStorage = response =>
        JSON.stringify(response),

    setInitialDecks = () =>
        AsyncStorage.setItem(DECKS_STORAGE_KEY, toStorage(initialState)),

    getDecks = () =>
        AsyncStorage.getItem(DECKS_STORAGE_KEY)
            .then(res => fromStorage(res)),

    getDeck = (id) =>
        getDecks()
            .then((decks) => decks[id]),

    saveDecks = decks =>
        AsyncStorage.setItem(DECKS_STORAGE_KEY, toStorage(decks)),

    saveDeckTitle = (deckTitle) => {
        getDecks().then(decks => {
            if (!decks[deckTitle]) {
                decks[deckTitle] = {
                    title: deckTitle,
                    questions: []
                };
                saveDecks(decks);
            }
        })
    },

    clearStorage = () =>
        AsyncStorage.setItem(DECKS_STORAGE_KEY, ""),

    addCardToDeck = (deckTitle, card) => {
        const {question, answer} = card;
        getDecks().then(decks => {
            if (decks[deckTitle] && decks[deckTitle]["questions"]) {
                decks[deckTitle]["questions"].push({question, answer})
            }
            saveDecks(decks);
        });
    }
;
