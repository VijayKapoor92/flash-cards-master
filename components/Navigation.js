import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import DecksView from '../views/DecksView';
import AddCardView from '../views/AddCardView';
import AddDeckView from '../views/AddDeckView';
import DeckInfoView from '../views/DeckInfoView';
import QuizView from '../views/QuizView';
import { Entypo } from '@expo/vector-icons';
import { charcoal, white, black } from '../utils/colors';

const Tabs = createBottomTabNavigator({
    DecksView:{
        screen: DecksView,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <Entypo name='list' size={30} color={tintColor} />
        }
    },
    AddDeckView: {
        screen: AddDeckView,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({tintColor}) => <Entypo name='add-to-list' size={30} color={tintColor} />
        }
    }
},{
    navigationOptions:{
        header: null
    },
    tabBarOptions:{
        activeTintColor: Platform.OS === 'ios'? charcoal : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : charcoal,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});


export const MainNavigator = createStackNavigator({
    Home:{
        screen: Tabs
    },
    DeckInfoView:{
        screen: DeckInfoView,
        navigationOptions:{
            headerTintColor: white,
            headerStyle:{
                backgroundColor: black
            },
            headerBackTitle: null,
        }
    },
    AddCardView:{
        screen: AddCardView,
        navigationOptions:{
            headerTintColor: white,
            headerStyle:{
                backgroundColor: charcoal
            },
            headerBackTitle: null,
            title: "Add Card"
        }
    },
    QuizView:{
        screen: QuizView,
        navigationOptions:{
            headerTintColor: white,
            headerStyle:{
                backgroundColor: black
            },
            headerBackTitle: null,
            title: "Quiz"
        }
    }
});
