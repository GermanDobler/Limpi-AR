import React from 'react';
import MainStack from './navigation/MainStack';
import SectorSelect from './src/components/SectorSelect';
import ScreenSector from './screens/ScreenSector';
import SelectorDatosPersonales from './src/components/SelectorDatosPersonales';
import ScreenSecretaria from './screens/ScreenSecretaria';
import ScreenLogIn from './screens/ScreenLogIn';
import ScreenPerfil from './screens/ScreenPerfil';
export default function App() {
  return (
    <div>
      {/* <MainStack/> */}
      {/* <ScreenSector/> */}
      {/* <ScreenSecretaria/> */}
      {/* <ScreenLogIn></ScreenLogIn> */}
      <ScreenPerfil></ScreenPerfil>
    </div>
  );
}
