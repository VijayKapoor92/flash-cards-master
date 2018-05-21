import {Platform, StyleSheet} from "react-native";
import {black, white} from "../utils/colors";

export const deckInfoSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15
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
    addCardBtn: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: black
    },
    addCardBtnText: {
        color: black
    },
    startQuizBtn: {
        backgroundColor: black
    },
    startQuizBtnText: {
        color: white
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
});