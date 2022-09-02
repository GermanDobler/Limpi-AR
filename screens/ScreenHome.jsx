import * as React from 'react';
import NavBar from '../src/UI/components/NavBar'
import CustomizedAccordions from '../src/UI/components/Accordion';
import CustomizedCard from '../src/UI/components/Card';
// import AdbIcon from '@mui/icons-material/Adb';
const Sectores = [
  {id:1, nombre:'Pasillo', estado:null, fecha:null, img:'/static/media/pasillo-taller.061f3f5c.png'},
  {id:2, nombre:'Dirección', estado:null, fecha:null, img:''},
  {id:3, nombre:'Taller - Soldadura', estado:null, fecha:null, img:'imagen'},
  {id:4, nombre:'Taller - Carpinteria', estado:null, fecha:null, img:'imagen'},
  {id:5, nombre:'Taller - Electricidad', estado:null, fecha:null, img:'imagen'},
  {id:6, nombre:'Taller - Electronica', estado:null, fecha:null, img:'imagen'},
  {id:7, nombre:'Cocina', estado:null, fecha:null, img:'imagen'}
  ]; 
// const Img = require.context('../src/img');
export default function HomeScreen({ navigation }) {
  console.log(navigation);
  return (
    <>
    <style jsx>{`
      body {
        background: #EEE5E3;
      }
    `}</style>
    <div style={{ alignItems: 'center', justifyContent: 'center' }}>
      <NavBar navigation={navigation} paqueteP={"Pantalla Home"}></NavBar>
        <div>
          {Sectores.map(sector =>(
            // <CustomizedAccordions key={sector.id.toString()} sector={sector}></CustomizedAccordions>
            <CustomizedCard key={sector.id.toString()} sector={sector}></CustomizedCard>
            ))}
        </div>
    </div>
  </>
  );
}
