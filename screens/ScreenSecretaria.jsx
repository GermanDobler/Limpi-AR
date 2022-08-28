import * as React from 'react';
import { Button, View} from 'react-native';
import SelectorDatosPersonales from '../src/UI/components/SelectorDatosPersonales';
import RadioButton from '../src/UI/components/RadioButton'



export default function ScreenSecretaria({ props }) {
  return (
    <View>
 <SelectorDatosPersonales nombre="Nombre">Nombre</SelectorDatosPersonales>
 <SelectorDatosPersonales nombre="Apellido"></SelectorDatosPersonales>
 <SelectorDatosPersonales nombre="DNI"></SelectorDatosPersonales>
 <SelectorDatosPersonales nombre="Contraseña"></SelectorDatosPersonales>
 <RadioButton></RadioButton>
    </View>
    
  );
}