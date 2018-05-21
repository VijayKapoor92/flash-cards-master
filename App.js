import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers'

import { Constants } from 'expo'

import { setInitialDecks } from './utils/api'
import { setLocalNotification } from './utils/notifications'

import { MainNavigator } from './components/Navigation'

import { charcoal } from './utils/colors'

function FlashCardsStatusBar({ backgroundColor, ...props }){
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default class App extends React.Component {
    componentDidMount() {
        setInitialDecks();
        setLocalNotification();
        debugger;
    }
    render() {
        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                    <FlashCardsStatusBar backgroundColor={charcoal} barStyle='light-content' />
                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}
