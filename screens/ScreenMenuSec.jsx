import  React, {useState, useEffect}  from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { db } from '../src/firebase/firebase';
import { onSnapshot, doc, collection } from 'firebase/firestore';
export default function ScreenMenuSec({ navigation }) {
  const [porteros , setportero] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'portero'), (foto) => {
      const porteros = []
      foto.forEach((portero) => {
        porteros.push({ ...portero.data(), id: portero.id })
      })
      setportero(porteros)
    })
    return () => {
    unsub()
    };
  }, []);
  const eliminar_portero = () => {
    
  }
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography className="Limpi-ar" component="h1" variant="h2" sx={{ mt: 1, mb: 1 }}>
          LIMPI-AR
        </Typography>
        <Typography component="h2" variant="h4" sx={{ mt: 4, mb: 1 }}>
          Gestion De Porteros
        </Typography>
        {porteros.map((portero) => { return (
          <>
          <h1>{portero.nombre} {portero.apellido}</h1>
          <Button
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 1, mb: 1 }}
        onClick={eliminar_portero}
      >
        eliminar Portero
      </Button> 
          </>
        )
        })}
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 1, mb: 1 }}

      >
        eliminar datos
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 1, mb: 1 }}

      >
        Editar Sector
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 1, mb: 1 }}

      >
        Editar Datos
      </Button>
      <Grid item xs={12} sm={6} >
        <TextField
          required
          fullWidth
          name="Nombre"
          label="Nombre"
          type="password"
          id="Nombre"
        />
      </Grid>
      <Grid item xs={12} sm={6} >
        <TextField
          required
          fullWidth
          name="Apellido"
          label="Apellido"
          type="password"
          id="Apellido"
        />
      </Grid>
      <Grid item xs={12} sm={6} >
        <TextField
          required
          fullWidth
          name="Dni"
          label="Dni"
          type="password"
          id="Dni"
        />
      </Grid>
      <Grid item xs={12} sm={6} >
        <TextField
          required
          fullWidth
          name="Contraseña"
          label="Contraseña"
          type="password"
          id="Contraseña"
        />
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 1, mb: 1 }}

      >
        Guardar Cambios
      </Button>
      <Button 
        type="submit"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 1, mb: 1 }}

      >
        Cancelar Cambios
      </Button>
    </>
  );
}