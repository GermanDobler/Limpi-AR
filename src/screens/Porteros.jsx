import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Porteros() {
    const { logout, user } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate('/Login');
        await logout();
    }
    return (
        <div>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )
}
