import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import InputMessage from './components/InputMessage';
import SendMessage from './components/SendMessage';
import axios from 'axios'

export default function App() {

  const [state, setState] = useState(false);
  const [prompt, setPrompt] = useState('noprompt');
  const [result, setResult] = useState('');
  const handleButtonPress = async () => {
    console.log(prompt);
    if(prompt == 'noprompt' || prompt.length <= 0){
      return null;
    }
    const apiKey = 'sk-proj-3W9KhlbKcNvUAlt9YByST3BlbkFJuumTidXt6Rtp8BIZgtE1';
    const client = axios.create({
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${apiKey}`,
      }
    })
    try {
      const result = await client.post('https://api.openai.com/v1/chat/completions',
        {
          "model": "gpt-3.5-turbo",
          "messages": [
            {
              "role": "system",
              "content": "You are a helpful assistant for freelancers to write thier messages to clients for different purposes. You will only give the message, maximum length of 600 characters."
            },
            {
              "role": "user",
              "content": prompt
            }
          ]
        }
      )
      console.log(result.data.choices[0]);
      setResult(result.data.choices[0].message.content);
      setState(true);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>EasyLancer</Text>
      </View>
      {state ? <SendMessage result={result} setState={setState}/> : <InputMessage handleButtonPress={handleButtonPress} setPrompt={setPrompt} />}
      <StatusBar style='auto' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
});

//sk-proj-4JCm1P2p1PsLS3xAlxbZT3BlbkFJ0l9K3L1PcfrmIXf6BcJX