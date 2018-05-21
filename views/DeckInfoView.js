import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Deck from '../components/Deck';
import { deckInfoSheet } from "../styles/deckInfoSheet";

class DeckInfoView extends Component {

    static navigationOptions = ({navigation}) => {
        const { deckTitle } = navigation.state.params;
        return {
            title: deckTitle
        }
    };

    render() {
        const { deck, navigateToAddCard, navigateToStartQuiz } = this.props;

        return (
            <View style={deckInfoSheet.container}>
                <Deck
                    id={deck.title}
                    title={deck.title}
                    questions={deck.questions}
                    bigFonts={true}
                />
                <TouchableOpacity
                    onPress={() => navigateToAddCard(deck.title)}
                    style={[deckInfoSheet.btn, deckInfoSheet.addCardBtn]}
                >
                    <Text style={[deckInfoSheet.btnText, deckInfoSheet.addCardBtnText]}>
                        Add Card
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[deckInfoSheet.btn, deckInfoSheet.startQuizBtn]}
                    onPress={() => navigateToStartQuiz(deck.title)}
                >
                    <Text style={[deckInfoSheet.btnText, deckInfoSheet.startQuizBtnText]}>
                        Start Quiz
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (decks, {navigation}) => {
    const { deckTitle } = navigation.state.params;
    return {
        deck: decks[deckTitle] || {},
        decks
    }
};

const mapDispatchToProps = (dispatch, {navigation}) => {
    const {deckTitle} = navigation.state.params;
    return {
        goBack: () => navigation.goBack(),
        navigateToAddCard: deckTitle => navigation.navigate('AddCardView', {deckTitle: deckTitle}),
        navigateToStartQuiz: deckTitle => navigation.navigate('QuizView', {deckTitle: deckTitle})
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(DeckInfoView);