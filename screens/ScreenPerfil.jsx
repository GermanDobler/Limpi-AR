import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
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
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState(0);
  const [correo, setCorreo] = useState("");
  const [turno, setTurno] = useState("");
  const handleChange = (event) => {
    setTurno(event.target.value);
    (e) => setTurno(e.target.value);
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const update = async (e) => {
    console.log("Se entro a update");
    e.preventDefault();
    const porteros = doc(db, "portero", id);
    const data = {
      nombre: nombre,
      apellido: apellido,
      celular: celular,
      correo: correo,
      turno: turno,
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
      setNombre(porteros.data().nombre);
      setApellido(porteros.data().apellido);
      setCelular(porteros.data().celular);
      setCorreo(porteros.data().correo);
      setTurno(porteros.data().turno);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    console.log("Se entro a useeffect flecha");
    getProductById(id);
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h1" gutterBottom>
        Asignar Sectores de Limpieza
      </Typography>
        <form onSubmit={update}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nro de Celular</label>
            <input
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electronico</label>
            <input
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              type="mail"
              className="form-control"
            />
          </div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Elegir Turno
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={turno}
                label="Elegir Turno"
                onChange={handleChange}
              >
                <MenuItem value={"Mañana"}>Mañana</MenuItem>
                <MenuItem value={"Tarde"}>Tarde</MenuItem>
                <MenuItem value={"Vespertino"}>Vespertino</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br /><br /><br />
            <button type="submit" className="btn btn-primary">
              Modificar Datos
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
