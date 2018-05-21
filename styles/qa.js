import { StyleSheet } from 'react-native';
import { black } from "../utils/colors";

export const qaSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flipCard: {
        height: 250,
        marginLeft: 10,
        marginRight: 10,
        backfaceVisibility: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flipCardBack: {
        position: "absolute",
        top: 0,
        left: 10,
        right:5
    },
    content: {
        color: black,
        fontSize: 44,
        textAlign: 'center'
    }
});