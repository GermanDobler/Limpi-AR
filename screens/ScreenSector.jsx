import * as React from 'react';
import { Button, View} from 'react-native';
import SectorSelect from '../src/components/SectorSelect';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ScreenSector({ navigation, props }) {
  return (
    <View>
      <ArrowBackIcon></ArrowBackIcon>
<SectorSelect nombre_sector="Sector 1"></SectorSelect>
<SectorSelect nombre_sector="Sector 2"></SectorSelect>
<SectorSelect nombre_sector="Sector 3"></SectorSelect>
<SectorSelect nombre_sector="Sector 4"></SectorSelect>
<SectorSelect nombre_sector="Sector 5 (Opcional)"></SectorSelect>
    </View>
  );
}
