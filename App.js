
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './src/context/AuthContext';
import ScreenHome from "./screens/ScreenHome";
import ScreenLogin from "./screens/ScreenLogin";
import ScreenSecretaria from "./screens/ScreenSecretaria";
import ScreenSector from "./screens/ScreenSector";
import ScreenPerfil from "./screens/ScreenPerfil";
function App() {

  return (
    <>
    <AuthProvider>
      <Router>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<ScreenHome />}></Route>
          </Routes>
          <Routes>
            <Route path="/ScreenLogin" element={<ScreenLogin />}></Route>
          </Routes>
          <Routes>
            <Route path="/ScreenSecretaria" element={<ScreenSecretaria />}></Route>
          </Routes>
          <Routes>
            <Route
              path="/ScreenSector"
              element={<ScreenSector />}
            ></Route>
          </Routes>
          <Routes>
            <Route path="/ScreenPerfil" element={<ScreenPerfil />}></Route>
          </Routes>
          {/* <Routes>
            <Route
              path="/Modificar_Visitas"
              element={<Modificar_Visitas />}
            ></Route>
          </Routes>
          <Routes>
            <Route
              path="/Editar_Visitas/:id"
              element={<Editar_Visitas />}
            ></Route>
          </Routes>
          <Routes>
            <Route
              path="/PrincipalNoticia"
              element={<PrincipalNoticia />}
            ></Route>
          </Routes>
          <Routes>
            <Route path="/SegundaNoticia" element={<SegundaNoticia />}></Route>
          </Routes>
          <Routes>
            <Route path="/TerceraNoticia" element={<TerceraNoticia />}></Route>
          </Routes>
          <Routes>
            <Route path="/NewBeepcon" element={<NewBeepcon />}></Route>
          </Routes> */}
        </div>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
