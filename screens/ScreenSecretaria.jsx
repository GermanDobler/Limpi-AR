import * as React from 'react';
import { Button, View } from 'react-native';
import SelectorDatosPersonales from '../src/UI/components/SelectorDatosPersonales';
import RadioButton from '../src/UI/components/RadioButton';
import NavBar from '../src/UI/components/NavBar';
import ButtonMui from '../src/UI/components/ButtonMui';
import UploadButton from '../src/UI/components/UploadButton';
import DeleteButton from '../src/UI/components/DeleteButton';
import SendButton from '../src/UI/components/SendButton';
import _JSXStyle from 'styled-jsx/style'

export default function ScreenSecretaria({ navigation, props }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <NavBar navigation={navigation} paqueteP={"Pantalla Secretaria"}></NavBar>
      <UploadButton className="botones"></UploadButton>
      <DeleteButton className="botones"></DeleteButton>
      <SendButton className="botones"></SendButton>
      <SelectorDatosPersonales  className="fondo"  nombre="Nombre"></SelectorDatosPersonales>
      <SelectorDatosPersonales className="fondo" nombre="Apellido"></SelectorDatosPersonales>
      <SelectorDatosPersonales className="fondo" nombre="DNI"></SelectorDatosPersonales>
      <SelectorDatosPersonales className="fondo" nombre="Contraseña"></SelectorDatosPersonales>
      <RadioButton></RadioButton>
      <ButtonMui name="Asignar Sector" onClick={() => navigation.navigate('Screen Secretaria')} ></ButtonMui>
      <style jsx>{`
      body {
        background: #EEE5E3;
      }
    `}</style>
    </View>
    

  );
}

