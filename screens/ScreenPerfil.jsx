import React from "react";
import { View } from "react-native";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
export default function ScreenPersonalInfo() {
  return (
    <View
      class="PersonalInfo"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <ArrowBackIcon></ArrowBackIcon>
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
      <Box sx={{ "& > :not(style)": { m: 80 } }}>
        <Fab size="small" color="primary" aria-label="add" variant="extended">
          <AddIcon sx={{ mr: 1 }} className="boton guardar" />
          guardar cambios
        </Fab>
      </Box>
    </View>
  );
}
