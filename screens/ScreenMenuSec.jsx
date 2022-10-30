import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function ScreenMenuSec({ navigation }) {
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
            <Typography component="h3" variant="h4" sx={{ mt: 4 , mb: 1}}>
              Gestion De Porteros
              </Typography>
         </Box>
         <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 1, mb: 1 }}
                startIcon={<DeleteIcon />}
              >
                eliminar datos
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 1, mb: 1 }}
                startIcon={<DeleteIcon />}
              >
                  Editar Sector
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 1, mb: 1 }}
                startIcon={<DeleteIcon />}
              >
                Editar Datos
              </Button>
              <Grid item xs={12}  sm={6} >
                  <TextField
                    required
                    fullWidth
                    name="Nombre"
                    label="Nombre"
                    type="password"
                    id="Nombre"
                  />
                </Grid>
                <Grid item xs={12}  sm={6} >
                  <TextField
                    required
                    fullWidth
                    name="Apellido"
                    label="Apellido"
                    type="password"
                    id="Apellido"
                  />
                </Grid>
                <Grid item xs={12}  sm={6} >
                  <TextField
                    required
                    fullWidth
                    name="Dni"
                    label="Dni"
                    type="password"
                    id="Dni"
                  />
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
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 1, mb: 1 }}
                startIcon={<DeleteIcon />}
              >
                Guardar Cambios
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 1, mb: 1 }}
                startIcon={<DeleteIcon />}
              >
                Cancelar Cambios
              </Button>
         </>
    );
}