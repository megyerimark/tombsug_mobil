import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './Button';

export default function App() {
  const [side, setSide] = useState('');
  const [alfa , setalfa]=useState('');
  const [radius , setRadius]=useState('');

  function Calc(){
    let rad = alfa*Math.PI /180;

    let radius = 1.0 /2.0 *side*Math.sin(rad);
    setRadius(radius);

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rombuszba írható kör sugara</Text>




      <Text>Oldal</Text>
      <TextInput style={styles.input} onChangeText={ side=> setSide(side)}>

      </TextInput>
      <Text>Alfaszög</Text>
      <TextInput style={styles.input}
      onChangeText = {alfa => setalfa(alfa)}>
      </TextInput>

      
      <Text>Szög</Text>
      <TextInput 
     value={radius} onChangeText = {radius => setRadius(radius)}>
      </TextInput>
     
       
      <Button onPress={Calc}></Button>
  
     
      <StatusBar style="auto" />
     
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
  title:{
    backgroundColor:'gold',
    width:'100%',
    height:30,
    textAlign:'center',
    fontSize:20,
  },
  input:{
    backgroundColor:'gray',
    height:35
  }
});
