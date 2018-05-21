import React, { PureComponent } from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as api from '../utils/api';
import { loadDecks } from '../actions';
import Deck from '../components/Deck';
import { AppLoading } from 'expo';
import { white, halfGray } from '../utils/colors';

class DecksView extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            ready: false
        };
    }

    componentDidMount() {
        const { loadDecks } = this.props;
            api.getDecks()
                .then(decks => loadDecks(decks))
                .then(() => this.isViewReady(true));
    }

    isViewReady = ready =>
        this.setState(() => ({ ready }));

    keyExtractor = item => item.title;

    onPressItem = item => {
        const { navigation } = this.props;
        navigation.navigate('DeckInfoView', {deckTitle: item.title});
    };

    renderItem = ({item}) => {
        const { title, questions } = item;
        return (
            <TouchableOpacity
                onPress={() => this.onPressItem(item)}
                style={styles.item}
            >
                <Deck
                    id={title}
                    title={title}
                    questions={questions}
                />
            </TouchableOpacity>
        )
    };

    renderLoader = () => (
        <AppLoading />
    );

    listOfDecks = decks =>
        Object.values(decks);

    render() {
        const { ready } = this.state;
        const { decks } = this.props;

        {ready && (
            this.renderLoader()
        )}

        return (
            <FlatList
                style={styles.container}
                data={this.listOfDecks(decks)}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15
    },
    item: {
        backgroundColor: white,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: halfGray
    }
});

const mapStateToProps = decks => ({
    decks
});

const mapDispatchToProps = ({
    loadDecks
});

export default connect(mapStateToProps, mapDispatchToProps)(DecksView);
