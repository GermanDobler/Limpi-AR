import React from 'react';
import { View } from 'react-native-web';
import ImageDisplay from './src/UI/components/ImageDisplay';
import PrincipalScreen from './src/UI/components/PrincipalScreen';
import Sector from './src/UI/components/Sector';
import SectorDisplay from './src/UI/components/SectorDisplay'
import AsignarSector from './src/UI/components/AsignarSector';
//import LoginForm from './src/UI/components/LoginForm';

function App() {
  return (
    <View>
      {/*<LoginForm></LoginForm>*/}
      <PrincipalScreen></PrincipalScreen>
      {/*<SectorDisplay></SectorDisplay>*/}
      {/* <ImageDisplay></ImageDisplay> */}
      {/*<AsignarSector></AsignarSector>*/}
    </View>
  );
}


export default App;