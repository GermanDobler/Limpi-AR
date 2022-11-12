import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Secretaria from './Secretaria';

export default function Home() {
    const { logout, user } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate('/Login')
        await logout();
    }
    // console.log(user)
    if (user.email == 'secretaria.epet20@gmail.com') {
        return <Secretaria/>
    } else {
    return (
        <div>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )
    }
}
