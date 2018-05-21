import React from 'react';
import { View, Text } from 'react-native';
import { deckSheet } from "../styles/deck";

const Deck = ({title, questions, bigFonts}) => {
    return (
        <View style={deckSheet.container}>
            <Text style={[deckSheet.title, bigFonts ? {fontSize: 3} : ""]}>
                {title}
            </Text>
            <Text style={[deckSheet.count, bigFonts ? {fontSize: 24} : ""]}>
                {`${questions.length} ${questions.length === 1 ? "card" : "cards"}`}
            </Text>
        </View>
    )
};

export default Deck;
