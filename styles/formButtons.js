import { Platform, StyleSheet } from "react-native";
import { black, lightGray, white } from "../utils/colors";

export const formButtonsSheet = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        flex: 1,
        backgroundColor: black,
        padding: 10,
        height: 45,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
    cancelBtn: {
        backgroundColor: lightGray
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
});