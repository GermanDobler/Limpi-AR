import * as React from 'react';
import {View} from 'react-native';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NavBar from '../src/UI/components/NavBar'
import CustomizedAccordions from '../src/UI/components/Accordion';
// import AdbIcon from '@mui/icons-material/Adb';
const Sectores = [
  {id:1, nombre:'Pasillo', estado:null, fecha:null, detalles:'', img:'/static/media/LOGO.aa147ef1.png'},
  {id:2, nombre:'Dirección', estado:null, fecha:null, detalles:'', img:''},
  {id:3, nombre:'Taller - Soldadura', estado:null, fecha:null, detalles:'', img:'imagen'},
  {id:4, nombre:'Taller - Carpinteria', estado:null, fecha:null, detalles:'', img:'imagen'},
  {id:5, nombre:'Taller - Electricidad', estado:null, fecha:null, detalles:'', img:'imagen'},
  {id:6, nombre:'Taller - Electronica', estado:null, fecha:null, detalles:'', img:'imagen'},
  {id:7, nombre:'Cocina', estado:null, fecha:null, detalles:'', img:'imagen'}
  ]; 

export default function HomeScreen({ navigation }) {
  console.log(navigation);
  return (
    <>
    <style jsx>{`
      body {
        background: #EEE5E3;
      }
    `}</style>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <NavBar navigation={navigation} paqueteP={"Pantalla Home"}></NavBar>
      {Sectores.map(sector =>(
        <CustomizedAccordions key={sector.id.toString()} sector={sector}></CustomizedAccordions>
        ))}
    </View>
  </>
  );
}
