import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import _JSXStyle from 'styled-jsx/style';
import { createTheme } from '@mui/material/styles';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';

// import _JSXStyle from 'styled-jsx/style'
// import AdbIcon from '@mui/icons-material/Adb';

const pantallasUser = ['ScreenPerfil'];// 'Configuración', 'LogOut'
const pantallasHome = ['ScreenSecretaria','ScreenSector'];
const pantallasSecretaria = ['ScreenHome', 'ScreenSector'];
const pantallasSector = ['ScreenHome', 'ScreenSecretaria']
const ResponsiveAppBar = ({ paqueteP, navigation }) => {
  const { user, isAuthenticated } = useAuth0();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  console.log(paqueteP);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

const theme = createTheme({
  palette: {
    primary: {
      main: '#53B2E2',
    },
    secondary: {
      main: '#000',
    },
  },
});

  switch (paqueteP) {
    case "Pantalla Home":
      var opciones = (pantallasHome.map((pantalla) => ( //Array map de opciones y Botónes con conexiones entre pantallas 
        <MenuItem key={pantalla} onClick={() => {
          navigation.navigate(pantalla);
          handleCloseNavMenu();
        }}>
          {pantalla == "ScreenLogIn" ? "LOGIN" : null} {/*Ifternario que compara el prop(Pantalla) con la pantalla indicada por string, 
        if == true imprime un string definido Else es igual a null*/}
          {pantalla == "ScreenSecretaria" ? "Secretaria" : null}
          {pantalla == "ScreenSector" ? "Sectores" : null}
        </MenuItem>
      )));
      break;
    case "Pantalla Secretaria":
      console.log(opciones + "ENTRÓ A Secretaria")
      var opciones = (pantallasSecretaria.map((pantalla) => (
        <MenuItem key={pantalla} onClick={() => {
          navigation.navigate(pantalla);
          handleCloseNavMenu();
        }}>
          {pantalla == "ScreenHome" ? "Home" : null}
          {pantalla == "ScreenSector" ? "Sector" : null}
        </MenuItem>
      )));
      break;
    case "Pantalla Sector":
      var opciones = (pantallasSector.map((pantalla) => (
        <MenuItem key={pantalla} onClick={() => {
          navigation.navigate(pantalla);
          handleCloseNavMenu();
        }}>
          {pantalla == "ScreenHome" ? "Home" : null}
          {pantalla == "ScreenSecretaria" ? "Sector" : null}
        </MenuItem>
      )));
    case "Pantalla Perfil":
      var opciones = (pantallasSector.map((pantalla) => (
        <MenuItem key={pantalla} onClick={() => {
          navigation.navigate(pantalla);
          handleCloseNavMenu();
        }}>
          {pantalla == "ScreenHome" ? "Home" : null}
          {pantalla == "ScreenSecretaria" ? "Asignación Secretaria" : null}
        </MenuItem>
      )));
  }
  const { logout } = useAuth0();
  return ( //Estructura del NavBar
  <>
      <AppBar position="sticky" theme={theme}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {opciones}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {opciones}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Abrir Usuario">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src={user.image} /> */}
                  <Avatar>
                  <Profile/>
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {pantallasUser.map((opcion) => (
                  <MenuItem key={opcion} onClick={() => {
                    navigation.navigate(opcion);
                    handleCloseNavMenu();
                  }}>
                    {opcion == "ScreenPerfil" ? "Perfil" : null}
                  </MenuItem>
                ))}
                <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
                  Log Out 
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <style jsx="true">{`
      .css-1pz7awu-MuiButtonBase-root-MuiIconButton-root{
        background-color:#07acb2;
        padding:0;
        border-radius:40px;
        width:40px;
        height:40px;

      }
      .css-12h3d6w-MuiPaper-root-MuiAppBar-root{
        color: #fff;
        background: rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
   `}</style>
   </>
  );
};
export default ResponsiveAppBar;
// import { Grid } from '@mui/material'
// import React from 'react'
// import _JSXStyle from 'styled-jsx/style';
// import Menu from './Menu';

// export default function NavBar({ paqueteP, navigation }) {
//   return (
//     <>
//       <div className='Header'>
//         <Grid xs={12} item container>
//           <Grid xs={6} item>
//             <Menu paqueteP={paqueteP} navigation={navigation}></Menu>
//           </Grid>
//           <Grid xs={6} item>
//             perfil
//           </Grid>
//         </Grid>
//       </div>
//     </>
//   )
// }

