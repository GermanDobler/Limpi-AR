import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Navigate, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { async } from "@firebase/util";

export default function SectorSelect(props) {
  const porteroCollection = collection(db, "portero");
  const navigate = useNavigate();
  const store = async (e) => {
    e.preventDefault();
    await addDoc(porteroCollection, {
      sector1: sector1,
      sector2:sector2 ,
      sector3: sector3,
      sector4: sector4,
      sector5: sector5,
    });
    navigate("/Home");
  };
  const [sector, setSector] = React.useState('');
  const handleChange = (event) => {
    setSector(event.target.value);
    {
      (e) => setSector(e.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <form onSubmit={store}>
        <InputLabel id="demo-simple-select-label">{props.nombre_sector}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.sector}
          label={props.nombre_sector}
          onChange={handleChange}
        >
          <MenuItem value={'Taller arriba Derecha- Aula 1 Sist. Oper'}>Taller arriba Derecha- Aula 1 Sist. Oper</MenuItem>
          <MenuItem value={'Taller arriba Derecha- Aula 2 Base de Datos'}>Taller arriba Derecha- Aula 2 Base de Datos</MenuItem>
          <MenuItem value={'Taller arriba Derecha- Aula 3'}>Taller arriba Derecha- Aula 3</MenuItem>
          <MenuItem value={'Baño Docentes Arriba'}>Baño Docentes Arriba</MenuItem>
          <MenuItem value={'Vereda frente'}>Vereda frente</MenuItem>
          <MenuItem value={'Cocina'}>Cocina</MenuItem>
          <MenuItem value={'SUM'}>SUM</MenuItem>
          <MenuItem value={'Galeria'}>Galeria</MenuItem>
          <MenuItem value={'Pasillo Taller'}>Pasillo Taller</MenuItem>
          <MenuItem value={'Regencia/Jefe Taller'}>Regencia/Jefe Taller</MenuItem>
          <MenuItem value={'Sala de Profes Y Hall'}>Sala de Profes Y Hall</MenuItem>
          <MenuItem value={'Baño Mujeres Direccion'}>Baño Mujeres Direccion</MenuItem>
          <MenuItem value={'Secretaria/Direccion/ViceDireccion'}>Secretaria/Direccion/ViceDireccion</MenuItem>
          <MenuItem value={'Secretaria/Direccion/ViceDireccion'}>Secretaria/Direccion/ViceDireccion</MenuItem>
          <MenuItem value={'Escalera Delante'}>Escalera Delante</MenuItem>
          <MenuItem value={'Asesoria'}>Asesoria</MenuItem>
          <MenuItem value={'Sala de Multimedia'}>Sala de Multimedia</MenuItem>
          <MenuItem value={'Taller Arriba Izquierda- Aula 1 Elec.Prof.Seg'}>Taller Arriba Izquierda- Aula 1 Elec.Prof.Seg</MenuItem>
          <MenuItem value={'Taller Aula 2 Izquierda - Electricidad 1º'}>Taller Aula 2 Izquierda - Electricidad 1º</MenuItem>
          <MenuItem value={'Taller 4 Torneria'}>Taller 4 Torneria</MenuItem>
          <MenuItem value={'Taller Aula 3 Izquierda'}>Taller Aula 3 Izquierda</MenuItem>
          <MenuItem value={'Taller Aula 4 Izquierda'}>Taller Aula 4 Izquierda</MenuItem>
          <MenuItem value={'Escalera Atras'}>Escalera Atras</MenuItem>
          <MenuItem value={'Baños Varones (arriba)'}>Baños Varones arriba</MenuItem>
          <MenuItem value={'Biblioteca'}>Biblioteca</MenuItem>
          <MenuItem value={'Laboratorio'}>Laboratorio</MenuItem>
          <MenuItem value={'Pasillo L'}>Pasillo L</MenuItem>
          <MenuItem value={'Baño Mujeres (Taller)'}>Baño Mujeres Taller</MenuItem>
          <MenuItem value={'Taller 1 Ajuste'}>Taller 1 Ajuste</MenuItem>
        </Select>
      </form>
    </Box>
  );
}
