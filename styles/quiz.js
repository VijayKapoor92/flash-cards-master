import { StyleSheet, Platform } from 'react-native';
import { black, charcoal, green, red, white } from "../utils/colors";

export const quizSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 10
    },
    pagination: {
        flex: 1,
        alignItems: 'flex-start'
    },
    qacard: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'stretch'
    },
    btn: {
        padding: 10,
        height: 45,
        margin: 10,
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                borderRadius: 7
            },
            android: {
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 2
            }
        })
    },
    greenBtn: {
        backgroundColor: green
    },
    redBtn: {
        backgroundColor: red
    },
    goBackToDeckBtn: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: black
    },
    goBackToDeckBtnText: {
        color: black
    },
    restartQuizBtn: {
        backgroundColor: black
    },
    restartQuizBtnText: {
        color: white
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    scoreContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreLbl: {
        fontSize: 36,
        color: charcoal
    },
    score: {
        fontSize: 48,
        color: green
    }
});