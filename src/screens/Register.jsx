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
      <div className="fondo">
        <div>
            {/* <img src={Epet20} alt="Epet20" height={'100%'} width={'auto'}/> */}
        </div>
        <div>
          <div >
            <p titulo={'Registro'} />
            {errorType && <div style={style.ScreenLoginSignin.error}>{errorType}</div>}
            <div >
              <label>Correo Electrónico</label>
              <input type="text" name='email' placeholder='Ingrese correo electrónico' onChange={handleChange} style={style.ScreenLoginSignin.input} />
            </div>
            <div>
              <label>Contraseña</label>
              <input type="password" name='password' placeholder='Ingrese contraseña' onChange={handleChange} style={style.ScreenLoginSignin.input} />
            </div>
            <button onClick={handleSubmit}>Crear Cuenta</button>
            <div >
              <button >
                {/* <img src={google} alt="googleimg" width={'20px'} height={'20px'} /> */}
                <p style={{ padding: '0px', margin: '0px', fontSize: '18px', fontWeight: '300' }}>Iniciar con Google</p>
              </button>
            </div>
            <div >
              <p >Ya tengo cuenta</p>
              <p onClick={() => navigate('/Login')} style={{ color: '#078282', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Iniciar Sesión</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}