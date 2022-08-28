import React from "react";
import { View } from "react-native";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import NavBar from  '../src/UI/components/NavBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
export default function ScreenPerfil({ navigation}) {
  return (
    <View>
      <NavBar navigation={navigation}>  </NavBar>
      <ArrowBackIcon></ArrowBackIcon>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           REGISTRATE
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Nombre"
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
                  autoComplete="faily-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email "
                  name="Email"
                  autoComplete="Email"
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
                  autoComplete="Nueva Contraseña"
                />
              </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrate
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  ¿Ya tienes una cuenta? Registrate
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </View>
  )
}