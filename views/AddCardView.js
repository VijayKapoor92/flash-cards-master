import React, {Component} from 'react'
import {
    Text,
    TextInput,
    View
} from 'react-native';

import { connect } from 'react-redux';
import FormButtons from '../components/FormButtons';
import * as api from '../utils/api';
import { addCard } from '../actions/index';
import { addCardSheet } from "../styles/addCard";

class AddCardView extends Component {

    constructor(props){
        super(props);
        this.state = {
            question: "",
            answer: ""
        }
    }

    submit = () => {
        const { question, answer } = this.state;
        const { addCard, deck, goBack } = this.props;

        if (question && answer) {
            addCard(deck.title, {question, answer}); //update Redux
            api.addCardToDeck(deck.title, {question, answer}); //update db
            goBack();
        }
    };

    reset = () => {
        const { goBack } = this.props;
        this.setState({
            question: "",
            answer: ""
        });
        goBack();
    };

    setQuestion = question =>
        this.setState({ question });

    setAnswer = answer =>
        this.setState({ answer });

    render() {
        const { deck } = this.props;

        return (
            <View style={addCardSheet.container}>
                <Text style={addCardSheet.title}>
                    {deck.title}
                </Text>
                <TextInput
                    style={addCardSheet.question}
                    underlineColorAndroid={'transparent'}
                    editable={true}
                    maxLength={100}
                    placeholder="Enter the question here"
                    onChangeText={question => this.setQuestion(question)}
                />
                <TextInput
                    style={addCardSheet.answer}
                    underlineColorAndroid={'transparent'}
                    editable={true}
                    maxLength={200}
                    multiline={true}
                    placeholder="Enter the answer here"
                    onChangeText={answer => this.setAnswer(answer)}
                />
                <FormButtons
                    onSubmit={this.submit}
                    onCancel={this.reset}
                    submitBtnText={'Add Card'}
                />
            </View>
        )
    }
}

const mapStateToProps = (decks, {navigation}) => {
    const { deckTitle } = navigation.state.params;
    return {
        deck: decks[deckTitle] || {}
    }
};

const mapDispatchToProps = (dispatch, {navigation}) => {
    const { deckTitle } = navigation.state.params;
    return {
        goBack: () => navigation.goBack(),
        addCard: (deckTitle, card) => dispatch(addCard(deckTitle, card))
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardView);
