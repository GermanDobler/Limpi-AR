import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../components/GlobalStyles';
import { useAuth } from '../context/AuthContext';

export default function Register() {
    const { signup, getError, errorType, loginWithGoogle } = useAuth();
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
            await signup(user.email, user.password)
            navigate('/home');
        } catch (error) {
            getError(error)//mando a la funcion el error por parametro
        }
    }

    const handleGoogleLogin = async () => {
        await loginWithGoogle();
        navigate('/home');
    }

    return (
        <div>
            {errorType && <div>{errorType}</div>}
            <div >
                <label className='text-3xl font-bold underline'>Correo Electrónico</label>
                <input type="text" name='email' placeholder='Ingrese correo electrónico' onChange={handleChange} style={style.ScreenLoginSignin.input} />
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" name='password' placeholder='Ingrese contraseña' onChange={handleChange} style={style.ScreenLoginSignin.input} />
            </div>
            <button onClick={handleSubmit}>Crear Cuenta</button>
            <div >
                <p >Ya tengo cuenta</p>
                <p onClick={() => navigate('/Login')} style={{ color: '#078282', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Iniciar Sesión</p>
            </div>
        </div>
    )
}