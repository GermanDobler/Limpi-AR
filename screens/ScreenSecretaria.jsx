import * as React from 'react';
import { Button, View} from 'react-native';
import SelectorDatosPersonales from '../src/components/SelectorDatosPersonales';
import RadioButton from '../src/components/RadioButton';
import ImageSelector from '../src/components/ImageSelector';


export default function ScreenSecretaria({ props }) {
  return (
    <View 
    style={{ alignItems: "center", justifyContent: "center", backgroundColor: 'grey' }}>
        <ImageSelector></ImageSelector>
 <SelectorDatosPersonales  nombre="Nombre">Nombre</SelectorDatosPersonales>
 <SelectorDatosPersonales  nombre="Apellido"></SelectorDatosPersonales>
 <SelectorDatosPersonales  nombre="DNI"></SelectorDatosPersonales>
 <SelectorDatosPersonales  nombre="Contraseña"></SelectorDatosPersonales>
 <RadioButton></RadioButton>
    </View>
    
  );
}

