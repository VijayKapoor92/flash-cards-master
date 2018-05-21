import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { formButtonsSheet } from "../styles/formButtons";

class FormButtons extends PureComponent {
    render() {
        const {onSubmit, onCancel, submitBtnText, cancelBtnText} = this.props;
        return (
            <View style={formButtonsSheet.row}>
                <TouchableOpacity style={[formButtonsSheet.btn, formButtonsSheet.cancelBtn]} onPress={onCancel}>
                    <Text style={formButtonsSheet.btnText}>{cancelBtnText || 'Cancel'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[formButtonsSheet.btn]} onPress={onSubmit}>
                    <Text style={formButtonsSheet.btnText}>{submitBtnText || 'Submit'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default FormButtons;
