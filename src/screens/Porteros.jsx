import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion'
export default function Porteros() {
    const { logout, user } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate('/Login');
        await logout();
    }
    return (
        <motion.div>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </motion.div>
    )
}
