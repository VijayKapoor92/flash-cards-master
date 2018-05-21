import {StyleSheet} from "react-native";
import {black, gray} from "../utils/colors";

export const deckSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: black,
        fontSize: 24,
        textAlign: 'center'
    },
    count: {
        color: gray,
        fontSize: 16,
        textAlign: 'center'
    }
});