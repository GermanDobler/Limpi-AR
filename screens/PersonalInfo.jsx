import React from "react";
import { View } from "react-native";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
export default function PersonalInfo() {
  return (
    <View
      class="PersonalInfo"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <ArrowBackIcon onpress></ArrowBackIcon>
      <Box sx={{ "& > :not(style)": { m: 80 } }}>
        <Fab size="small" color="primary" aria-label="add" variant="extended">
          <AddIcon sx={{ mr: 1 }} className="boton guardar" />
          guardar cambios
        </Fab>
      </Box>
    </View>
  );
}
