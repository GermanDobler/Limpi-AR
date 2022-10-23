import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
const theme = createTheme();
export default function ScreenPersonalInfo({ navigation }) {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && ( 
    <>
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
            <Typography className="Limpi-ar" component="h1" variant="h2" sx={{ mt: 1, mb: 1 }}>
              LIMPI-AR
            </Typography>
            <Typography component="h3" variant="h4" sx={{ mt: 4 , mb: 1}}>
              DATOS PERSONALES 
            </Typography>
            <Box component="form" noValidate sx={{ mt: 2, mb: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <Typography component="h4" variant="h7" sx={{ mt: 1 }}>
                {user.name} 
                </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography component="h4" variant="h7" sx={{ mt: 1 }}>
                {user.family_name}
                </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                <Typography component="h4" variant="h7" sx={{ mt: 1 }}>
                 {user.email}
               </Typography>
                </Grid>
                <Grid item xs={12}  sm={6} >
                  <TextField
                    required
                    fullWidth
                    name="Contraseña"
                    label="Contraseña"
                    type="password"
                    id="Contraseña"
                  />
                </Grid>
              </Grid>
              <div>
                <Button variant="contained" component="label" sx={{ mt: 2, mb: 1 }}>
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
                startIcon={<DeleteIcon />}
              >
                Cancelar
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  
    </>
    )
  );
}