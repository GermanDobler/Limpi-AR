import React, { useState } from 'react'
import { View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useStyles } from '../context/GlobalStyles';
import google from '../assets/image 1.png';
import Title from '../UI/components/Title';
import Epet20 from '../assets/Epet20.jpg'

export default function ScreenSignin({ navigation }) {
  const { signup, getError, errorType, loginWithGoogle } = useAuth();
  const { style } = useStyles();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value }) //actualizar estado

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password)
      navigation.navigate('ScreenHome');
    } catch (error) {
      getError(error)//mando a la funcion el error por parametro
    }
  }

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    navigation.navigate('ScreenHome');
  }

  return (
    <View>
      <div className="fondo">
        <View>
            <img src={Epet20} alt="Epet20" height={'100%'} width={'auto'}/>
        </View>
        <View style={style.ScreenLoginSignin.container}>
          <View style={style.ScreenLoginSignin.containerLog}>
            <Title titulo={'Registro'} />
            {errorType && <div style={style.ScreenLoginSignin.error}>{errorType}</div>}
            <div style={style.ScreenLoginSignin.containerInput}>
              <label>Correo Electrónico</label>
              <input type="text" name='email' placeholder='Ingrese correo electrónico' onChange={handleChange} style={style.ScreenLoginSignin.input} />
            </div>
            <div style={style.ScreenLoginSignin.containerInput}>
              <label>Contraseña</label>
              <input type="password" name='password' placeholder='Ingrese contraseña' onChange={handleChange} style={style.ScreenLoginSignin.input} />
            </div>
            <button onClick={handleSubmit} style={style.ScreenLoginSignin.button}>Crear Cuenta</button>
            <div style={style.ScreenLoginSignin.containerFlex}>
              <button onClick={handleGoogleLogin} style={style.ScreenLoginSignin.buttonGoogle}>
                <img src={google} alt="googleimg" width={'20px'} height={'20px'} />
                <p style={{ padding: '0px', margin: '0px', fontSize: '18px', fontWeight: '300' }}>Iniciar con Google</p>
              </button>
            </div>
            <div style={{ display: 'flex', gap: '5px', marginBottom:'30px', marginTop:'15px' }}>
              <p style={{ color: '#121212c4', fontSize: '18px', fontWeight: '300' }}>Ya tengo cuenta</p>
              <p onClick={() => navigation.navigate('ScreenLogin')} style={{ color: '#078282', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Iniciar Sesión</p>
            </div>
          </View>
        </View>
      </div>
    </View>
  )
}
