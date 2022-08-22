import * as React from 'react';
import { Button, View} from 'react-native';
import SelectorDatosPersonales from '../src/components/SelectorDatosPersonales';
import RadioButton from '../src/components/RadioButton';
import ImageSelector from '../src/components/ImageSelector';
import NavBar from '../src/UI/components/NavBar';

export default function ScreenSecretaria({ navigation, props}) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <NavBar navigation={navigation} paqueteP={"Pantalla Secretaria"}></NavBar>
      <ImageSelector nombre="Cargar Imagen"></ImageSelector>
      <SelectorDatosPersonales nombre="Nombre">Nombre</SelectorDatosPersonales>
      <SelectorDatosPersonales nombre="Apellido"></SelectorDatosPersonales>
      <SelectorDatosPersonales nombre="DNI"></SelectorDatosPersonales>
      <SelectorDatosPersonales nombre="Contraseña"></SelectorDatosPersonales>
      <RadioButton></RadioButton>
    </View>
    
  );
}

