import React from 'react';
import MainStack from './navigation/MainStack'
import ScreenSector from './screens/ScreenSector';
import ScreenSecretaria from './screens/ScreenSecretaria';
import ScreenLogIn from './screens/ScreenLogIn'
import ScreenHome from './screens/ScreenHome'

export default function App() {
  return (
    <div>
      {/* <MainStack/> */}
      {/* <ScreenSector/> */}
      <ScreenSecretaria/>
      {/* <ScreenLogIn></ScreenLogIn>
      <ScreenHome></ScreenHome> */}
    </div>
  );
}
