import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function InputMessage() {
    const [selectedOption, setSelectedOption] = useState('');
    const [textInputValue, setTextInputValue] = useState('');

    const handleButtonPress = () => {
        // Handle button press action here
        console.log('Button pressed');
    };

    return (
        <View style={styles.content}>
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
                style={styles.dropdown}
            >
                <Picker.Item label="Ask for Budget" value="Budget" />
                <Picker.Item label="Price Quotation" value="Quotation" />
                <Picker.Item label="Deadline Extension" value="Deadline" />
            </Picker>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setTextInputValue(text)}
                value={textInputValue}
                placeholder="Enter Message Content"
            />
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    dropdown: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    input: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
