import * as React from 'react';
import { Button, View } from 'react-native';
import SectorSelect from '../src/UI/components/SectorSelect';
import NavBar from '../src/UI/components/NavBar';
import ButtonMui from '../src/UI/components/ButtonMui';
import _JSXStyle from 'styled-jsx/style'
export default function ScreenSector({ navigation, props }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <NavBar navigation={navigation} paqueteP={"Pantalla Sector"}></NavBar>
      <div className="fondo">
        <br />
      <SectorSelect nombre_sector="Sector 1"></SectorSelect>
      <SectorSelect nombre_sector="Sector 2"></SectorSelect>
      <SectorSelect nombre_sector="Sector 3"></SectorSelect>
      <SectorSelect nombre_sector="Sector 4"></SectorSelect>
      <SectorSelect nombre_sector="Sector 5 (Opcional)"></SectorSelect>
      <ButtonMui name="Guardar Sectores" onClick={() => navigation.navigate('ScreenSecretaria')}></ButtonMui>
      </div>
      <style jsx>{`
      body {
        background: grey;
      }
      .fondo{
        background: #EEE5E3;
      }
    `}</style>
    </View>

  );
}

