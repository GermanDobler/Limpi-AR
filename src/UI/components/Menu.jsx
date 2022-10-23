import { Grid, div, MenuItem } from '@mui/material'
import React from 'react'
import Menu from '@mui/material/Menu';
const pantallasUser = ['ScreenPerfil'];// 'Configuración', 'LogOut'
const pantallasHome = ['ScreenSecretaria'];
const pantallasSecretaria = ['ScreenHome', 'ScreenSector'];
const pantallasSector = ['ScreenHome', 'ScreenSecretaria'];
export default function Menuu({ paqueteP, navigation }) {
  switch (paqueteP) {
    case "Pantalla Home":
      var opciones = (pantallasHome.map((pantalla) => ( //Array map de opciones y Botónes con conexiones entre pantallas 
        <MenuItem key={pantalla} onClick={() => {
          navigation.navigate(pantalla);   
        }}>
          {pantalla == "ScreenLogIn" ? "LOGIN" : null} {/*Ifternario que compara el prop(Pantalla) con la pantalla indicada por string, 
        if == true imprime un string definido Else es igual a null*/}
          {pantalla == "ScreenSecretaria" ? "Secretaria" : null}
        </MenuItem>
      )));
      break;
    case "Pantalla Secretaria":
      console.log(opciones + "ENTRÓ A Secretaria")
      var opciones = (pantallasSecretaria.map((pantalla) => (
        <MenuItem key={pantalla} onClick={() => {
          navigation.navigate(pantalla);
          
        }}>
          {pantalla == "ScreenHome" ? "Home" : null}
          {pantalla == "ScreenSector" ? "Sector" : null}
        </MenuItem>
      )));
      break;
    case "Pantalla Sector":
      var opciones = (pantallasSector.map((pantalla) => (
        <MenuItem key={pantalla} onClick={() => {
          navigation.navigate(pantalla);
          
        }}>
          {pantalla == "ScreenHome" ? "Home" : null}
          {pantalla == "ScreenSecretaria" ? "Sector" : null}
        </MenuItem>
      )));
    case "Pantalla Perfil":
      var opciones = (pantallasSector.map((pantalla) => (
        <MenuItem key={pantalla} onClick={() => {
          navigation.navigate(pantalla);
          
        }}>
          {pantalla == "ScreenHome" ? "Home" : null}
          {pantalla == "ScreenSecretaria" ? "Asignación Secretaria" : null}
        </MenuItem>
      )));
  }
  return (
    <>
      <nav role="navigation">
        <Grid container item xs={12} id="menuToggle">
          <input className="input-menu" type="checkbox" />
          <span className='linea'></span>
          <span className='linea'></span>
          <span className='linea'></span>
          {/* <Grid container xs={12} item id="menu">
            <Grid xs={12} item className="item">
            {opciones}
            </Grid>
          </Grid> */}
          <Menu>
          {opciones}
          </Menu>
        </Grid>
      </nav>
      <style jsx="true">{`
#menuToggle
{
  display: block;
  position: relative;
  top: 10px;
  left: 20px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle .item
{
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

#menuToggle .item:hover
{
  color: tomato;
}


#menuToggle .input-menu
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

#menuToggle .linea
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle .linea:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle .linea:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle .input-menu:checked ~ .linea
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle .input-menu:checked ~ .linea:nth-last-child(3)
{
  opacity: 0.2;
  transform: rotate(0deg) scale(0.2, 0.2);
}


#menuToggle .input-menu:checked ~ .linea:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  // position: absolute;
  width: 400px;
  overflow:auto;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 80px;
  background: #fff;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu .item
{
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle .input-menu:checked ~ #menu
{
  transform: none;
}
    `}</style>
    </>
  )
}
