import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function InputMessage({ handleButtonPress, setPrompt }) {
    const [selectedOption, setSelectedOption] = useState('write a message to ask the client about his budget. ');
    const [textInputValue, setTextInputValue] = useState('');
    const [temPrompt, setTemPrompt] = useState('');

    const handlePress = () => {
        // if(selectedOption == 'Budget'){
        //     setTemPrompt('write a message to ask the client about his budget. ');
        // }else if(selectedOption == 'Quotation'){
        //     setTemPrompt('write a quotation message to tell the client about the total price for the project in detail with each price for hours. ');
        // }else if(selectedOption == 'Deadline'){
        //     setTemPrompt('write a message to ask the client to extend the deadline very politely. ');
        // }
        // console.log(textInputValue);
        const prompt = selectedOption+textInputValue;
        console.log(prompt, "outside");
        setPrompt(prompt);
        handleButtonPress();
    }
    //const api_key = OPENAI_API_KEY;

    return (
        <View style={styles.content}>
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue, itemIndex) => {setSelectedOption(itemValue)}}
                style={styles.dropdown}
            >
                <Picker.Item label="Ask for Budget" value='write a message to ask the client about his budget. ' />
                <Picker.Item label="Price Quotation" value='write a quotation message to tell the client about the total price for the project in detail with each price for hours. ' />
                <Picker.Item label="Deadline Extension" value='write a message to ask the client to extend the deadline very politely. ' />
            </Picker>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setTextInputValue(text)}
                value={textInputValue}
                placeholder="Enter Message Content"
            />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
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
