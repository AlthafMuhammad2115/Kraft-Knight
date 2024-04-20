import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import InputMessage from './components/InputMessage';


export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>EasyLancer</Text>
      </View>
      <InputMessage />
      <StatusBar style='auto'/>
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