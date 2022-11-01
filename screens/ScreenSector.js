import React, { useEffect, useState } from "react";
import { Button, View } from 'react-native';
import { useNavigate, useParams } from "react-router-dom";
import SectorSelect from '../src/UI/components/SectorSelect';
import ButtonMui from '../src/UI/components/ButtonMui';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import _JSXStyle from 'styled-jsx/style';
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../src/firebase/firebase";
import { async } from "@firebase/util";
export default function ScreenSector({ navigation, props }) {

  const navigate = useNavigate();
  const { id } = useParams();
  const update = async (e) => {
    console.log("Se entro a update");
    e.preventDefault();
    const porteros = doc(db, "portero", id);
    const data = {
      sector1: sector1,
      sector2: sector2,
      sector3: sector3,
      sector4: sector4,
      sector5: sector5,
    };
    await updateDoc(porteros, data);
    navigate("/ScreenHome");
  };
  const getProductById = async (id) => {
    console.log("Se entro a getproductById flecha");
    const porteros = await getDoc(doc(db, "portero", id));
    if (porteros.exists()) {
      //console.log(product.data())
      console.log("visitaexiste");
      setSector1(porteros.data().sector1);
      setSector2(porteros.data().sector2);
      setSector3(porteros.data().sector3);
      setSector4(porteros.data().sector4);
      setSector5(porteros.data().sector5);
    } else {
      console.log("error");
    }
  };
  const [sector1, setSector1] = React.useState('');
  const handleChangeSector1 = (event) => {
    setSector1(event.target.value);
    {
      (e) => setSector1(e.target.value);
    }
  };
  useEffect(() => {
    console.log("Se entro a useeffect flecha");
    getProductById(id);
    // eslint-disable-next-line
  }, []);
  const [sector2, setSector2] = React.useState('');
  const handleChangeSector2 = (event) => {
    setSector2(event.target.value);
    {
      (e) => setSector2(e.target.value);
    }
  };
  const [sector3, setSector3] = React.useState('');
  const handleChangeSector3 = (event) => {
    setSector3(event.target.value);
    {
      (e) => setSector3(e.target.value);
    }
  };

  const [sector4, setSector4] = React.useState('');
  const handleChangeSector4 = (event) => {
    setSector4(event.target.value);
    {
      (e) => setSector4(e.target.value);
    }
  };

  const [sector5, setSector5] = React.useState('');
  const handleChangeSector5 = (event) => {
    setSector5(event.target.value);
    {
      (e) => setSector5(e.target.value);
    }
  };

  return (
    <>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={update}>
          <Box sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Sector N°1</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sector1}
              label="Sector N°1"
              onChange={handleChangeSector1}
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
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Sector N°2</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sector2}
              label="Sector N°2"
              onChange={handleChangeSector2}
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
          </Box>


          <Box sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Sector N°3</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sector3}
              label="Sector N°3"
              onChange={handleChangeSector3}
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
          </Box>


          <Box sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Sector N°4</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sector4}
              label="Sector N°4"
              onChange={handleChangeSector4}
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
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Sector N°5</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sector5}
              label="Sector N°5"
              onChange={handleChangeSector5}
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
          </Box>
          <button type="submit" className="btn btn-primary">
            CARGAR SECTORES
          </button>

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

