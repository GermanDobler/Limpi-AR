import * as React from 'react';
import { Button, View } from 'react-native';
import SelectorDatosPersonales from '../src/UI/components/SelectorDatosPersonales';
import RadioButton from '../src/UI/components/RadioButton';
import ButtonMui from '../src/UI/components/ButtonMui';
import UploadButton from '../src/UI/components/UploadButton';
import DeleteButton from '../src/UI/components/DeleteButton';
import SendButton from '../src/UI/components/SendButton';
import _JSXStyle from 'styled-jsx/style'
import { Navigate, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { async } from "@firebase/util";

export default function ScreenSecretaria({ navigation, props }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState(0);
  const [correo, setCorreo] = useState("");
  const [turno, setTurno] = useState("");

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
    });
    navigate("/ScreenSector");
  };


  return (
    <>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {/*<UploadButton className="botones"></UploadButton>
      <DeleteButton className="botones"></DeleteButton>
      <SendButton className="botones"></SendButton>*/}
      {/*<SelectorDatosPersonales  className="fondo"  nombre="Nombre"></SelectorDatosPersonales>
      <SelectorDatosPersonales className="fondo" nombre="Apellido"></SelectorDatosPersonales>
      <SelectorDatosPersonales className="fondo" nombre="DNI"></SelectorDatosPersonales>
      <SelectorDatosPersonales className="fondo" nombre="Contraseña"></SelectorDatosPersonales>
      <RadioButton></RadioButton>*/}
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
              <label className="form-label">apellido</label>
              <input
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">celular</label>
              <input
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">correo</label>
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
      </form>
      <ButtonMui name="Asignar Sector"></ButtonMui>
      <style jsx="true">{`
      body {
        background: #EEE5E3;
      }
      `}</style>
    </View>
      </>
    

  );
}

