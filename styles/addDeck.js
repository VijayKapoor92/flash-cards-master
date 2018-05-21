import { StyleSheet } from "react-native";
import { black, lightGray, white } from "../utils/colors";

export const addDeckSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 20
    },
    deckLabel: {
        margin: 10,
        color: black,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40
    },
    deckTitle: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: lightGray
    }
});