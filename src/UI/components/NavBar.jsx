import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

const pantallasUser = ['ScreenPerfil', 'Configuración', 'LogOut'];
<<<<<<< HEAD
const pantallasH = ['ScreenLogIn', 'ScreenSecretaria','ScreenPerfil'];
const pantallasS = ['ScreenHome'];

const ResponsiveAppBar = ({ paqueteP, navigation}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  console.log(paqueteP);
  
=======
const pantallasHome = ['ScreenLogIn', 'ScreenSecretaria'];
const pantallasSecretaria = ['ScreenHome', 'ScreenSector'];
const pantallasSector = ['ScreenHome', 'ScreenSecretaria']
const ResponsiveAppBar = ({ paqueteP, navigation }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  console.log(paqueteP);

>>>>>>> 82faa199427262a35ae18909b92f3f5253cf7c35
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
<<<<<<< HEAD
  
  if (paqueteP == "Pantalla Home"){ 
    //Preguntamos que trae paqueteP(este contiene el valor de la pantalla desde la que fue enviado, 
    //pregunta si es igual a la "pantalla", con esto logramos mostrar las opciones de cierta pantalla
    var opciones = (pantallasH.map((pantalla) => ( //Array map de opciones y Botónes con conexiones entre pantallas 
    console.log(pantalla+"ENTRÓ A home"),
      <MenuItem key={pantalla} onClick={handleCloseNavMenu}>
        <Button 
          onClick={() => navigation.navigate(pantalla)} //Botón el cual nos envia a la pantalla indicada en el prop(Pantalla)
        >{pantalla == "ScreenLogIn" ? "LOGIN":null} {/*Ifternario que compara el prop(Pantalla) con la pantalla indicada por string, 
        if == true imprime un string definido Else es igual a null*/}
        {pantalla == "ScreenSecretaria" ? "Secretaria":null}
        </Button>
      </MenuItem>
    )));
  }else if(paqueteP == "Pantalla Secretaria"){
    console.log(opciones+"ENTRÓ A Secretaria")
    var opciones = (pantallasS.map((pantalla) => (
    <MenuItem key={pantalla} onClick={handleCloseNavMenu}>
      <Button 
        onClick={() => navigation.navigate(pantalla)}
      >{pantalla == "ScreenHome" ? "Home":null}
      </Button>
    </MenuItem>
  )));
=======
  switch (paqueteP) {
    case "Pantalla Home":
      var opciones = (pantallasHome.map((pantalla) => ( //Array map de opciones y Botónes con conexiones entre pantallas 
        <MenuItem key={pantalla} onClick={handleCloseNavMenu}>
          <Button
            onClick={() => navigation.navigate(pantalla)} //Botón el cual nos envia a la pantalla indicada en el prop(Pantalla)
          >{pantalla == "ScreenLogIn" ? "LOGIN" : null} {/*Ifternario que compara el prop(Pantalla) con la pantalla indicada por string, 
        if == true imprime un string definido Else es igual a null*/}
            {pantalla == "ScreenSecretaria" ? "Secretaria" : null}
          </Button>
        </MenuItem>
      )));
      break;
    case "Pantalla Secretaria":
      console.log(opciones + "ENTRÓ A Secretaria")
      var opciones = (pantallasSecretaria.map((pantalla) => (
        <MenuItem key={pantalla} onClick={handleCloseNavMenu}>
          <Button
            onClick={() => navigation.navigate(pantalla)}
          >
            {pantalla == "ScreenHome" ? "Home" : null}
            {pantalla == "ScreenSector" ? "Asignación Sector" : null}
          </Button>
        </MenuItem>
      )));
      break;
    case "Pantalla Sector":
      var opciones = (pantallasSector.map((pantalla) => (
        <MenuItem key={pantalla} onClick={handleCloseNavMenu}>
          <Button
            onClick={() => navigation.navigate(pantalla)}
          >
            {pantalla == "ScreenHome" ? "Home" : null}
            {pantalla == "ScreenSecretaria" ? "Asignación Secretaria" : null}
          </Button>
        </MenuItem>
      )));
>>>>>>> 82faa199427262a35ae18909b92f3f5253cf7c35
  }

  return ( //Estructura del NavBar
    <AppBar position="static">
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
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <img src={require('./img/LOGO.png')} height={75} width={75} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {opciones}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir Usuario">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem key={opcion} onClick={handleCloseUserMenu}>
                  <Button
                    onClick={() => navigation.navigate(opcion)} //Botón el cual nos envia a la pantalla indicada en el prop(Pantalla)
                  >
                    {opcion == "ScreenPerfil" ? "Perfil" : null}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
