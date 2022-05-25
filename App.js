import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/UI/components/Saludar';

//Acá conecto mis pantallas

//El saludar es estático ahora
//      <Saludar/>
//      <Saludar/>
//      <Saludar/>

//Esto es un props
//<View style={styles.container}>
export default function App() {
  return (
    <View style={styles.container}>
      
      <Saludar name="Exequiel Wiedermann"/>

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
