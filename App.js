import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/UI/components/LoginForm';

//Acá conecto mis pantallas

//El saludar es estático ahora
//      <Saludar/>
//      <Saludar/>
//      <Saludar/>

//Esto es un props
//<View style={styles.container}>
export default function App() {
  return (<LoginForm style={styles.contenedor_form}/>
  );
}

const styles = StyleSheet.create({
  contenedor_form: {
    flex: 1,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
