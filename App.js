
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './src/context/AuthContext';
import ScreenHome from "./screens/ScreenHome";
import ScreenLogin from "./screens/ScreenLogin";
import ScreenSecretaria from "./screens/ScreenSecretaria";
import ScreenSector from "./screens/ScreenSector";
import ScreenPerfil from "./screens/ScreenPerfil";
import ScreenRegister from "./screens/ScreenRegister";
import ProtectedRoute from "./src/UI/components/ProtectedRoute";
function App() {

  return (
    <AuthProvider>
    <>
    <AuthProvider>
      <Router>
        <div className="container mt-5">
        <AuthProvider>
          <Routes>
          <AuthProvider>
            <Route path="/" element={<ScreenRegister />}></Route>
            <Route path="/ScreenLogin" element={<ScreenLogin />}></Route>
            <Route path="/ScreenSecretaria" element={<ProtectedRoute><ScreenSecretaria /></ProtectedRoute>}></Route>
            <Route path="/ScreenSector" element={<ProtectedRoute><ScreenSector /></ProtectedRoute>}></Route>
            <Route path="/ScreenPerfil" element={<ProtectedRoute><ScreenPerfil /></ProtectedRoute>}></Route>
            <Route path="/ScreenHome" element={<ProtectedRoute><ScreenHome /></ProtectedRoute>} ></Route>
            </AuthProvider>
          </Routes>
          </AuthProvider>
        </div>
      </Router>
      </AuthProvider>
    </>
    </AuthProvider>
  );
}

export default App;
