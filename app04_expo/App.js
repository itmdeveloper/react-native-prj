import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import react, {Fragment, useState} from 'react'
import Counter from './src/component/Counter';

export default function App() {
  const name = 'CDS'
  const [num, setNum] = useState(0)
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {(() =>{
          if (name === 'D') return 'my name is d'
          else return 'my name is cds'
        })()}
      </Text>
      <Counter />
      <StatusBar style="auto" />
      <Text>{num}</Text>
      <Button title='aa' onPress={() => setNum(num + 1)} />
      <Button title='delay' onLongPress={() => alert('hi')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
