import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home({ navigation }) {
    const { logout, user } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate('/Login')
        await logout();
    }
    // console.log(user)
    return (
        <div>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )

}
