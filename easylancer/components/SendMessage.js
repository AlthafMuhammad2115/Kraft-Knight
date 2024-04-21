import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import Base64 from './Base64';

export default function SendMessage({ result, setState }) {
    const [textInputValue, setTextInputValue] = useState(result);

    const handleButtonPress = async () => {
        const data = new URLSearchParams();
        data.append('To', 'whatsapp:+918921224031');
        data.append('From', 'whatsapp:+14155238886');
        data.append('Body', textInputValue);

        const username = 'AC7c57039c4b8f23da3d07f82dc130eede';
        const password = 'df1c37c23172f7b65dd2e1568e71f67a';
        const credentials = Base64.btoa(`${username}:${password}`);
        // const client = axios.create({
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        try {
            axios.post('https://api.twilio.com/2010-04-01/Accounts/AC7c57039c4b8f23da3d07f82dc130eede/Messages.json',
                {
                    'To': 'whatsapp:+917736003016',
                    'From': 'whatsapp:+14155238886',
                    'Body': textInputValue,
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization' : `Basic ${credentials}`
                    },
                },
            ).then(result =>{
                console.log('message send');
                setState(false);
            })
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setTextInputValue(text)}
                value={textInputValue}
                placeholder="Enter Message Content"
                editable
                multiline
                numberOfLines={10}
                maxLength={600}
            />
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={()=>{setState(false)}}>
                <Text style={{fontSize: 16}}>Go Back</Text>
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
    button2: {
        backgroundColor: '#fff',
        borderWidth: 1,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
