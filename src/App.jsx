import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StyleProvider } from "./components/GlobalStyles";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  return (
    <StyleProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </StyleProvider>
  )
}

export default App
