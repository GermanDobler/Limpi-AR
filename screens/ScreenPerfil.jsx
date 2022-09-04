import React from "react";
import { View } from "react-native";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavBar from "../src/UI/components/NavBar"
import AddIcon from "@mui/icons-material/Add";
import Profile from "../src/UI/components/Profile";
import { Auth0Provider } from '@auth0/auth0-react';

export default function ScreenPersonalInfo({navigation}) {
  return (
    <View
      class="PersonalInfo"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
            <Auth0Provider domain='limpi-ar.us.auth0.com'
        clientId='hXGGWtPNGHTkotavIkwcgoiKrkn0u9E6'
        redirectUri={window.location.origin}>
      <NavBar navigation={navigation} paqueteP={"Pantalla Perfil"}/>
        <h2>DATOS PERSONALES</h2>
        <div>
        <label>
          Nombre:<input type="Nombre"></input>
        </label>
      </div>
      <div>
        <label>
          Apellido:<input type="Apellido"></input>
        </label>
      </div>
      <div>
        <label>
          Dni:<input type="DNI"></input>
        </label>
      </div>
      <div>
        <label>
          Contraseña:<input type="password"></input>
        </label>
      </div>
      <Profile></Profile>
      <Box sx={{ "& > :not(style)": { m: 80 } }}>
        <Fab size="small" color="primary" aria-label="add" variant="extended">
          <AddIcon sx={{ mr: 1 }} className="boton guardar" />
          guardar cambios
        </Fab>
      </Box>
      </Auth0Provider>
    </View>
  );
}
