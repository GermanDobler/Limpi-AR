import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion'
export default function Secretaria() {
    const { logout, user } = useAuth();

    const navigate = useNavigate();
    
    const handleLogout = async () => {
        navigate('/Login')
        await logout();
    }

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 0.3,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1],
    }}
    >
        <h1>Secretaria</h1>
        <button onClick={handleLogout}>Cerrar Sesión</button>
        
    </motion.div>
)
}
