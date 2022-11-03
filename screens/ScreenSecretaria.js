import React, { useState, useEffect } from "react";
import { Button, View } from 'react-native';
import SelectorDatosPersonales from '../src/UI/components/SelectorDatosPersonales';
import ButtonMui from '../src/UI/components/ButtonMui';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import _JSXStyle from 'styled-jsx/style'
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from "react-router-dom";
import {
  collection, addDoc, getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../src/firebase/firebase";
import { async } from "@firebase/util";

export default function ScreenSecretaria({ navigation, props }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState(0);
  const [correo, setCorreo] = useState("");
  const [turno, setTurno] = useState("");
  const [sector1, setSector1] = useState("Sector 1");
  const [sector2, setSector2] = useState("Sector 2");
  const [sector3, setSector3] = useState("Sector 3");
  const [sector4, setSector4] = useState("Sector 4");
  const [sector5, setSector5] = useState("Sector 5");


  const [portero, setPortero] = useState([]);
  const getPortero = async () => {
    const data = await getDocs(porteroCollection);
    setPortero(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("quepa".portero);
    console.log("datos portero asyn");
  };


  const handleChange = (event) => {
    setTurno(event.target.value);
    (e) => setTurno(e.target.value);
  };

  const porteroCollection = collection(db, "portero");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await addDoc(porteroCollection, {
      nombre: nombre,
      apellido: apellido,
      celular: celular,
      correo: correo,
      turno: turno,
      sector1: sector1,
      sector2: sector2,
      sector3: sector3,
      sector4: sector4,
      sector5: sector5,
    });
    navigate(`/ScreenSector/${portero.id}`);
  };
  useEffect(() => {
    console.log("datos portero asyn");
    getPortero();
  }, []);

  return (
    <>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Registre Sus Datos Personales
      </Typography>
        <form onSubmit={store}>
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
          <br />
            <button type="submit" className="btn btn-primary" key={portero.id}>
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

