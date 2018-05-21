import { StyleSheet } from "react-native";
import { black, lightGray, white } from "../utils/colors";

export const addCardSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 20
    },
    title: {
        color: black,
        fontSize: 24,
        textAlign: 'center'
    },
    question: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: lightGray,
        borderRadius: 4
    },
    answer: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: lightGray,
        height: 70
    }
});