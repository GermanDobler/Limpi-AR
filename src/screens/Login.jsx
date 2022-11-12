import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../components/GlobalStyles';
import { useAuth } from '../context/AuthContext';
// import { useStyles } from './context/GlobalStyles';
// import { motion } from "framer-motion"

export default function Login() {
    const { login, getError, errorType, loginWithGoogle, user } = useAuth();
    const [userr, setUser] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user])

    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => setUser({ ...userr, [name]: value }) //actualizar estado

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(userr.email, userr.password)
            navigate('/Home');
        } catch (error) {
            getError(error)//mando el error por parametro
        }
    }

    const handleGoogleLogin = async () => {
        await loginWithGoogle();
        navigate('/Home');
    }

    return (
        <div>
            {errorType && <div>{errorType}</div>}
            <div>
                <label>Correo Electrónico</label>
                <input type="text" name='email' placeholder='Ingrese correo electrónico' onChange={handleChange} />
            </div>
            <div >
                <label>Contraseña</label>
                <input type="password" name='password' placeholder='Ingrese contraseña' onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} >Iniciar sesión</button>
            <div >
                <button onClick={handleGoogleLogin} >
                    <p style={{ padding: '0px', margin: '0px', fontSize: '18px', fontWeight: '300' }}>Iniciar con Google</p>
                </button>
            </div>
            <div >
                <p style={{ color: '#121212c4', fontSize: '18px', fontWeight: '300' }}>No tenés cuenta?</p>
                <p onClick={() => navigate('/Register')} style={{ color: '#078282', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Registrate</p>
            </div>
        </div>
    )
}