import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../components/GlobalStyles';
import { useAuth } from '../context/AuthContext';
// import { useStyles } from './context/GlobalStyles';
// import { motion } from "framer-motion"

export default function Login() {
    const { login, getError, errorType, loginWithGoogle } = useAuth();
    const { style } = useStyles();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value }) //actualizar estado

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password)
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
            <div>
                {/* <img src={Epet20} alt="Epet20" height={'100%'} width={'100%'} /> */}
            </div>
            <div >
                <div >
                    {/* <p titulo={'Inicio de Sesión'} /> */}
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
            </div>
        </div>
    )
}