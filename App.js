import React from 'react';
import { View } from 'react-native-web';
import ImageDisplay from './src/UI/components/ImageDisplay';
import PrincipalScreen from './src/UI/components/PrincipalScreen';
import Sector from './src/UI/components/Sector';
import SectorDisplay from './src/UI/components/SectorDisplay'
import AsignarSector from './src/UI/components/AsignarSector';
import Cancel from './src/UI/components/Cancel';
import Guardar from './src/UI/components/Guardar';
import LoginForm from './src/UI/components/LoginForm';
import PersonalInfo from './src/UI/components/PersonalInfo';
import AsignarPortero from './src/UI/components/AsignarPortero';

function App() {
  return (
    <View>
      {/*<LoginForm></LoginForm>*/}
      {/* <PrincipalScreen></PrincipalScreen> */}
      {/*<SectorDisplay></SectorDisplay>*/}
      {/*<ImageDisplay></ImageDisplay>*/}
      {/*<AsignarSector></AsignarSector>*/}
      {/* <AsignarPortero></AsignarPortero> */}
      {/* <Cancel></Cancel> */}
      {/* <Guardar></Guardar>  */}
       <PersonalInfo></PersonalInfo> 
    </View>
  );
}


export default App;