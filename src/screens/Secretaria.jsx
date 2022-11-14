import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion'
import logoutimg from '../assets/logout.png';
import Navbar from '../components/Navbar';
export default function Secretaria() {
    const { logout, user } = useAuth();

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
        <Navbar/>
        <div className='flex justify-center'>
            <p className='text-2xl font-semibold text-slate-700
            self-center mt-5'>Bienvenido {user.email}</p>
        </div>
    </motion.div>
)
}
