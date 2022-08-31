import * as React from 'react';
import { Button, View} from 'react-native';
import SectorSelect from '../src/UI/components/SectorSelect';
import NavBar from '../src/UI/components/NavBar';
import ButtonMui from '../src/UI/components/ButtonMui';
export default function ScreenSector({ navigation, props }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <NavBar navigation={navigation} paqueteP={"Pantalla Sector"}></NavBar>
        <SectorSelect nombre_sector="Sector 1"></SectorSelect>
        <SectorSelect nombre_sector="Sector 2"></SectorSelect>
        <SectorSelect nombre_sector="Sector 3"></SectorSelect>
        <SectorSelect nombre_sector="Sector 4"></SectorSelect>
        <SectorSelect nombre_sector="Sector 5 (Opcional)"></SectorSelect>
        <ButtonMui name="Guardar Sectores"></ButtonMui>
    </View>
    
  );
}

