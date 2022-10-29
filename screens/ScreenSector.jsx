import React, { useState } from "react";
import { Button, View } from 'react-native';
import SectorSelect from '../src/UI/components/SectorSelect';
import ButtonMui from '../src/UI/components/ButtonMui';
import _JSXStyle from 'styled-jsx/style';
import { Navigate, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../src/firebase/firebase";
import { async } from "@firebase/util";
export default function ScreenSector({ navigation, props }) {
  return (
    <>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={store}> 
        <div className="fondo">
          <br />
          <SectorSelect nombre_sector="Sector 1"></SectorSelect>
          <SectorSelect nombre_sector="Sector 2"></SectorSelect>
          <SectorSelect nombre_sector="Sector 3"></SectorSelect>
          <SectorSelect nombre_sector="Sector 4"></SectorSelect>
          <SectorSelect nombre_sector="Sector 5 (Opcional)"></SectorSelect>
          <ButtonMui name="Guardar Sectores"></ButtonMui> 
        </div>
        </form>
        <style jsx="true">{`
      body {
        background: #EEE5E3;
      }
      `}</style>
      </View>
    </>

  );
}

