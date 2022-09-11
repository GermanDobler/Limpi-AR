import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "../src/UI/components/NavBar";
import { Auth0Provider } from '@auth0/auth0-react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const theme = createTheme();
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};
export default function ScreenPersonalInfo({ navigation }) {
  return (
    <>
      <NavBar navigation={navigation} paqueteP={"Pantalla Perfil"} />
      <Auth0Provider domain='limpi-ar.us.auth0.com'
        clientId='hXGGWtPNGHTkotavIkwcgoiKrkn0u9E6'
        redirectUri={window.location.origin}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography classname="Limpi-ar" component="h1" variant="h2"  sx={{ mt: 1, mb: 1 }}>
                LIMPI-AR
              </Typography>
              <Typography component="h3" variant="h5" sx={{ mt: 1 }}>
                DATOS PERSONALES
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="Nombre"
                      required
                      fullWidth
                      id="Nombre"
                      label="Nombre"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="Apellido"
                      label="Apellido"
                      name="Apellido"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="Contraseña"
                      label="Contraseña"
                      type="Contraseña"
                      id="Contraseña"
                    />
                  </Grid>
                </Grid>
                 <div>
                <Button variant="contained" component="label"  sx={{ mt: 2, mb: 1 }}>
             CARGAR NUEVA FOTO  
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 1, mb: 1 }}
                  endIcon={<SendIcon />}
                >
                  Aceptar cambios
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="error"
                  sx={{ mt: 1, mb: 1 }}
                  startIcon={<DeleteIcon/>}
                >
                  Cancelar
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Auth0Provider>
    </>
  );
}