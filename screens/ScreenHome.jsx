import * as React from 'react';
import NavBar from '../src/UI/components/NavBar'
import CustomizedAccordions from '../src/UI/components/Accordion';
import CustomizedCard from '../src/UI/components/Card';
import _JSXStyle from 'styled-jsx/style'

// import AdbIcon from '@mui/icons-material/Adb';
const Sectores = [
  {id:1, nombre:'Pasillo', estado:null, fecha:"02-09-2022", img:'/static/media/pasillo-taller.061f3f5c.png'},
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
    <div>
      <NavBar navigation={navigation} paqueteP={"Pantalla Home"}></NavBar>
        <div className='cards'>
          {Sectores.map(sector =>(
            // <CustomizedAccordions key={sector.id.toString()} sector={sector}></CustomizedAccordions>
            <CustomizedCard key={sector.id.toString()} sector={sector}></CustomizedCard>
            ))}
        </div>
        <img />
    </div>
    <style jsx="true" global="true">{`
      *{
        box-sizing: border-box;
      }
      body {
        background: #EEE5E3;
      }
      body, html {
        font-family: 'Roboto Slab', serif;
        margin: 0;
        width: 100%;
        height: 100%;
        padding: 0;
      }
      //opacidad modal
      .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop{
        
      }

      .contenedor-modal{
        opacity:1 !important;
        height: 400px;
        width: 320px;
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
        -webkit-box-shadow: 20px 20px 22px rgba(0,0,0,1);
        box-shadow: 20px 20px 22px rgba(0,0,0,1);
        font-family: 'Poppins',sans-serif;
        text-align:center;
      }

      .css-qc420c-MuiTypography-root{
        background-color:#fff;
        margin:0 !important;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 1px solid #000;
      }

      .cards {
        margin-top:10px;
        padding-left:10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        gap:20px 37px;
      }
      
      .card__like {
        width: 18px;
      }
      
      .card__clock {
        width: 15px;
        vertical-align: middle;
        fill: #AD7D52;
      }
      .card__time {
        font-size: 12px;
        color: #AD7D52;
        vertical-align: middle;
        margin-left: 5px;
      }
      
      .card__clock-info {
          float: right;
      }
      
      .card__img {
        visibility: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 235px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      
      .card__info-hover {
        position: absolute;
        padding: 16px;
        width: 100%;
        opacity: 0;
        top: 0;
      }
      
      .card__img--hover {
        transition: 0.2s all ease-out;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        position: absolute;
        height: 235px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        top: 0;
        
      }
      .card {
        transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
        background-color: #fff;
        width: 45%;
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
      }
      .card:hover {
        box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
          transform: scale(1.10, 1.10);
      }
      
      .card__info {
        z-index: 2;
        background-color: #fff;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        padding: 16px 24px 24px 24px;
      }
      
      .card__category {
        font-family: 'Raleway', sans-serif;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
        font-weight: 500;
        color: #868686;
      }
      
      .card__title {
        margin-top: 5px;
        margin-bottom: 10px;
        font-family: 'Roboto Slab', serif;
      }
      
      .card__by {
        font-size: 12px;
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
      }
      
      .card__author {
        font-weight: 600;
        text-decoration: none;
        color: #AD7D52;
      }
      
      .card:hover .card__img--hover {
          height: 100%;
          opacity: 0.3;
      }
      
      .card:hover .card__info {
        background-color: transparent;
        position: relative;
      }
      
      .card:hover .card__info-hover {
          opacity: 1;
      }
    `}</style>
  </>
  );
}
