import React from 'react';
import MainStack from './navigation/MainStack'
import SectorSelect from './src/components/SectorSelect';
import ScreenSector from './screens/ScreenSector';
export default function App() {
  return (
    <div>
      {/* <MainStack/> */}
      <ScreenSector/>
    </div>
  );
}
