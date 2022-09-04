import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//------
import { useAuth0 } from '@auth0/auth0-react';
import ButtonLogIn from '../src/UI/components/ButtonLogIn';


function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Limpi-AR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export default function InicioSesion({ navigation }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      dni: data.get('dni'),
      contrasenia: data.get('contrasenia'),
    });
  };
  const { loginWithRedirect  } = useAuth0();
  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className='box' align="center">
          <Avatar sx={{ mt: 2, mb: 3, bgcolor: 'success.main' }} />
          <Typography component="h1" variant="h5" >
            Inicio de Sesión
          </Typography>
          <img src={require('../src/img/LOGO.png')} height={350} width={300} />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <Grid container item >
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Button onClick={() => navigation.navigate('ScreenHome')}>HOLAAAAAAA</Button>
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <ButtonLogIn onClick={() => loginWithRedirect()}></ButtonLogIn>
              </Grid>
              <Grid item xs sx={{mt:3}}>
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item xs sx={{mt:3}}>
                <Link href="#" variant="body2">
                  {"Nuevo usuario? Registarse"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 10, mb: 4 }}></Copyright>
      </Container>
    </ThemeProvider>
    
  );
}
