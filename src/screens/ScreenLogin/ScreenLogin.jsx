import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { useStyles } from '../../context/GlobalStyles';
import Title from '../../UI/components/Title';
import google from '../../assets/image 1.png';
import Epet20 from '../../assets/Epet20.jpg'
// import { motion } from "framer-motion"

export default function ScreenLogin({ navigation }) {
  const { login, getError, errorType, loginWithGoogle } = useAuth();
  const { style } = useStyles();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value }) //actualizar estado

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password)
      navigation.navigate('ScreenHome');
    } catch (error) {
      getError(error)//mando el error por parametro
    }
  }

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    navigation.navigate('ScreenHome');
  }

  return (
    <div>
      <div style={{ width: '100vw', justifyContent: 'center', display: 'flex' }}>
        <img src={Epet20} alt="Epet20" height={'100%'} width={'100%'} />
      </div>
      <div
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{
        //   duration: 0.6,
        //   delay: 0.5,
        //   ease: [0, 0.71, 0.2, 1.01]
        // }}
        style={style.ScreenLoginSignin.container}>
        <View style={style.ScreenLoginSignin.containerLog}>
          <Title titulo={'Inicio de Sesión'} />
          {errorType && <View style={style.ScreenLoginSignin.error}>{errorType}</View>}
          <View style={style.ScreenLoginSignin.containerInput}>
            <label>Correo Electrónico</label>
            <input type="text" name='email' placeholder='Ingrese correo electrónico' onChange={handleChange} style={style.ScreenLoginSignin.input} />
          </View>
          <View style={style.ScreenLoginSignin.containerInput}>
            <label>Contraseña</label>
            <input type="password" name='password' placeholder='Ingrese contraseña' onChange={handleChange} style={style.ScreenLoginSignin.input} />
          </View>
          <button onClick={handleSubmit} style={style.ScreenLoginSignin.button}>Iniciar sesión</button>
          <View style={style.ScreenLoginSignin.containerFlex}>
            <button onClick={handleGoogleLogin} style={style.ScreenLoginSignin.buttonGoogle}>
              <img src={google} alt="googleimg" width={'20px'} height={'20px'} />
              <p style={{ padding: '0px', margin: '0px', fontSize: '18px', fontWeight: '300' }}>Iniciar con Google</p>
            </button>
          </View>
          {/* <div style={style.ScreenLoginSignin.containerFlex}>              
            <Text style={{ color: '#121212c4', fontSize: '18px', fontWeight: '300'}}>No tenés cuenta?</Text>
              <Text onClick={() => navigation.navigate('ScreenSignin')} style={{ color: '#078282', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Registrate</Text>
            </div> */}
          <div style={{ display: 'flex', gap: '5px', marginBottom: '30px' }}>
            <p style={{ color: '#121212c4', fontSize: '18px', fontWeight: '300' }}>No tenés cuenta?</p>
            <p onClick={() => navigation.navigate('ScreenSignin')} style={{ color: '#078282', fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Registrate</p>
          </div>
        </View>
      </div>
    </div>
  )
}
