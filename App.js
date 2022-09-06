import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HorarioForm from './src/UI/components/HorarioForm';
import InformeForm from './src/UI/components/InformeForm';
import LoginForm from './src/UI/components/LoginForm';


export default function App() {
  return (
    <View style={styles.container}>
      <Saludar firstname="Exequiel" lastname="Wiedermann"/>
      {/*
        Para enviar números en una variable es con {}
        
        Explicar porque la aplicación anda igual si enviamos algo que no es
      */}
      <Saludar firstname="Agustín" lastname={28}/>
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
