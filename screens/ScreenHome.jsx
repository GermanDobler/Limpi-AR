import * as React from 'react';
import CustomizedCard from '../src/UI/components/Card';
import _JSXStyle from 'styled-jsx/style';
import PasilloTaller from '../src/img/sectores/pasillo-taller.png';
import Direccion from '../src/img/sectores/Direccion.png';
import Soldadura from '../src/img/sectores/Soldadura.png';
import Carpinteria from '../src/img/sectores/Carpinteria.png';
import Electricidad from '../src/img/sectores/Electricidad.png';
import Electronica from '../src/img/sectores/Electronica.png';
import Cocina from '../src/img/sectores/Cocina.png';
import { Grid } from '@mui/material';
import { useAuth } from '../src/context/AuthContext';
// import AdbIcon from '@mui/icons-material/Adb';
const Sectores = [
  {id:1, nombre:'Pasillo', estado:true, fecha:"02-09-2022", img:PasilloTaller},
  {id:2, nombre:'Dirección', estado:true, fecha:"03-09-2022", img:Direccion},
  {id:3, nombre:'Soldadura', estado:false, fecha:null, img:Soldadura},
  {id:4, nombre:'Carpinteria', estado:false, fecha:null, img:Carpinteria},
  {id:5, nombre:'Electricidad', estado:false, fecha:null, img:Electricidad},
  {id:6, nombre:'Electronica', estado:true, fecha:null, img:Electronica},
  {id:7, nombre:'Cocina', estado:true, fecha:null, img:Cocina}
  ]; 
// const Img = require.context('../src/img');

const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
export default function HomeScreen({ navigation }) {
  return (

    <div className='color'>
      <div className='contenedor-cards'>
      <Grid item xs={12} container>
          {Sectores.map(sector =>(
            // <CustomizedAccordions key={sector.id.toString()} sector={sector}></CustomizedAccordions>
            <CustomizedCard key={sector.id.toString()} sector={sector}></CustomizedCard>
            ))}
      </Grid>
      <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
    <style jsx="true" global="true">{`
    .contenedor-cards{
      max-height: 100vh;
      width: 100vw;
      overflow: auto;
      overflow-style:none;
      border-top-right-radius:30px;
      border-top-left-radius:30px;
      background-color:#fff;
    }
    .contenedor-cards::-webkit-scrollbar {
      display: none;
    }
    .color{
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background-color:#d4e2e1;
    }
      *{
        box-sizing: border-box;
      }
      body, html {
        font-family: 'Montserrat Alternates Thin';
        font-style: normal;
        font-weight: normal;
        src: local('Montserrat Alternates Thin'), url('MontserratAlternates-Thin.woff') format('woff');
        margin: 0;
        width: 100%;
        height: 100%;
        padding: 0;
      }

      .css-view-175oi2r r-flex-13awgt0{
        overflow:auto;
      }
      //opacidad modal
      .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop{
        
      }

      .contenedor-modal{
        opacity:1 !important;
        height: 50%;
        width: 90%;
        background-color: rgba(255, 255, 255, 1)!important;
        -webkit-backdrop-filter: blur(20px) !important;
        backdrop-filter: blur(20px);
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 8px;
        font-family: 'Poppins',sans-serif;
        text-align:center;
      }
      
      
      .card {//estilos de la carta
        transition: all .4s cubic-bezier(0.175, 0.885, 0, 0.5);
        background-color: #ebf5f6;
        margin:15px 10px 8px 10px;
        position: relative;
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.5);
      }
      .css-qc420c-MuiTypography-root{
        background-color:#D6CDA4;
        margin:0 !important;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 1px solid #000;
      }

      .card__img {
        visibility: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 175px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      .card__img--hover {
        transition: 0.2s all ease-out;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        position: absolute;
        height: 175px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        top: 0;
      }
      
      .card__info-hover {
        position: absolute;
        padding: 16px;
        width: 100%;
        opacity: 0;
        top: 0;
      }
      
      .card__info {
        justify-content:center;
        text-align:center;
        z-index: 2;
        background-color: #ebf5f6;
        // background-color: #37c8c3;
        // background-color: #07acb2;
        color:#07acb2;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        padding-top:5px;
      }
      
      .card__category {
        font-family: 'Montserrat Alternates Thin';
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
        font-weight: 500;
        color: #07acb2;
      }
      
      .card__title {
        margin-top: 5px;
        margin-bottom: 10px;
        font-family: 'Roboto Slab', serif;
      }

      .card:hover .card__img--hover {
          height: 100%;
          opacity: 1;
      }

    `}</style>
  </div>
  );
}
