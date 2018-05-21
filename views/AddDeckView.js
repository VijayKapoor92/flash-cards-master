import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View
} from 'react-native';

import { connect } from 'react-redux';
import { addDeckSheet } from "../styles/addDeck";
import { addDeck } from '../actions/index';
import { saveDeckTitle } from '../utils/api';

import FormButtons from '../components/FormButtons';
import { NavigationActions } from 'react-navigation';

class AddDeckView extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ""
        }
    };

    submit = () => {
        const { title } = this.state;
        const { addDeck } = this.props;
        if (title) {
            addDeck(title);
            saveDeckTitle(title);
            this.toHome();
        }
    };

    reset = () => {
        this.setState({
            title: ""
        });
        this.toHome();
    };

    toHome() {
        const { navigation } = this.props;
        navigation.dispatch(NavigationActions.back({key: 'AddDeckView'}));
    }

    render() {
        return (
            <View style={addDeckSheet.container}>
                <Text style={addDeckSheet.deckLabel}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    style={addDeckSheet.deckTitle}
                    editable={true}
                    maxLength={50}
                    placeholder="Deck Title"
                    onChangeText={(title) => this.setState({title})}
                />
                <FormButtons
                    onSubmit={this.submit}
                    onCancel={this.reset}
                    submitBtnText={'Add Deck'}
                    cancelBtnText={'Go Back'}
                />
            </View>
        )
    }
};

function mapStateToProps(decks) {
    return {decks}
}
export default connect(mapStateToProps, {addDeck})(AddDeckView);
