import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useStyles } from '../context/GlobalStyles';
import Title from '../UI/components/Title';
export default function ScreenSignin({ navigation }) {
  const { signup, getError, errorType } = useAuth();
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
  return (
    <View>
      <div className="fondo">
        <View style={style.container_hola}>
          <View style={style.container}>
            <Title titulo={'Registro'} />
            {errorType && <p>{errorType}</p>}
            <label>Correo Electrónico</label>
            <input type="text" name='email' placeholder='Ingrese correo electrónico' onChange={handleChange} style={style.input} />
            <label>Contraseña</label>
            <input type="password" name='password' placeholder='Ingrese contraseña' onChange={handleChange} style={style.input} />
            <div style={style.containerFlex}>
              <button onClick={handleSubmit} style={style.button}>Crear Cuenta</button>
              <button onClick={() => navigation.navigate('ScreenLogin')} style={style.button}>Ya tengo cuenta</button>
            </div>
          </View>
        </View>
      </div>
    </View>
  )
}
