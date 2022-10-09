import { View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { useStyles } from '../../context/GlobalStyles';
import Title from '../../UI/components/Title';
import './ScreenLogin.css'
import google from '../../assets/image 1.png';
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
    <View>
      <div className="fondo">
        <View style={style.container_hola}>
          <View style={style.container}>
            <Title titulo={'Inicio de Sesión'} />
            {errorType && <p>{errorType}</p>}
            <label>Correo Electrónico</label>
            <input type="text" name='email' placeholder='Ingrese correo electrónico' onChange={handleChange} style={style.input} />
            <label>Contraseña</label>
            <input type="password" name='password' placeholder='Ingrese contraseña' onChange={handleChange} style={style.input} />
            <div style={style.containerFlex}>
              <button onClick={handleSubmit} style={style.button}>Iniciar sesión</button>
              <button onClick={() => navigation.navigate('ScreenSignin')} style={style.button}>Registrate</button>
            </div>
            <div style={style.containerFlex}>
              <button onClick={handleGoogleLogin} style={style.buttonGoogle}><img src={google} alt="googleimg" width={'20px'} height={'20px'}/>Goggle</button>
            </div>
          </View>
        </View>
      </div>
    </View>
  )
}
