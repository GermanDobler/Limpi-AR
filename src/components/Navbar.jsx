import React from 'react'
import { useNavigate } from 'react-router-dom';
import logoutimg from '../assets/logout.png';
import { useAuth } from '../context/AuthContext';
export default function Navbar() {
    const { logout, user } = useAuth();

    const navigate = useNavigate();
    
    const handleLogout = async () => {
        navigate('/Login')
        await logout();
    }  
    
  return (
    <div className='w-full h-16 flex
    bg-neutral-100 border-b drop-shadow-md justify-around'>
        <div className='flex' >
        <button className='w-10' onClick={handleLogout}>
            <img src={logoutimg} alt="" width={'35px'}/>
        </button>
        <p className='text-2xl font-semibold text-slate-700
        self-center ml-2'>
            EPET20
        </p>
        </div>
        <div className='flex w-auto gap-2'>
        <button className="rounded-lg bg-white w-40 h-10
            border border-neutral-400 font-semibold
            text-center text-slate-700 text-lg
            justify-center mt-3">
            porteros
        </button>
        <button className='rounded-lg bg-teal-600 w-4/6 h-10
            border border-neutral-400 font-semibold
            text-center text-white text-lg
            justify-center mt-3'>
            estadísticas 
        </button>
        </div>
    </div>
  )
}
