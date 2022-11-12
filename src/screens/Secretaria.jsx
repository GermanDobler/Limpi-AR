import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Secretaria() {
    const { logout, user } = useAuth();

    const navigate = useNavigate();
    
    const handleLogout = async () => {
        navigate('/Login')
        await logout();
    }

  return (
    <div>
        <h1>Secretaria</h1>
        <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
)
}
