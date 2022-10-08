import { View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useStyles } from '../context/GlobalStyles';
export default function ScreenLogin({navigation}) {
  const { login, getError, errorType } = useAuth();
  const { style } = useStyles();
  const [ user, setUser ] = useState({
    email: '',
    password: ''
  });
  const handleChange = ({target:{name, value}}) => setUser({...user,[name]:value}) //actualizar estado

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try{
      await login(user.email, user.password)
      navigation.navigate('ScreenHome');
    } catch (error){
      getError(error)//mando el error por parametro
    }
  } 

    return (
        <View style={style.container}>
            {errorType && <p>{errorType}</p>}
            <label>Correo Electronico</label>
            <input type="text" name='email' placeholder='Ingrese correo electrónico' onChange={handleChange} />
            <label>Contraseña</label>
            <input type="password" name='password' placeholder='Ingrese contraseña' onChange={handleChange} />
            <button onClick={handleSubmit}>Iniciar sesión</button>
            <button onClick={()=>navigation.navigate('ScreenSignin')}>Registrate</button>
        </View>
    )
}
