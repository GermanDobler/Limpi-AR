import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useStyles } from '../context/GlobalStyles';
export default function ScreenSignin({navigation}) {
  const { signup ,getError, errorType} = useAuth();
  const { style } = useStyles();
  const [ user, setUser ] = useState({
    email: '',
    password: ''
  });
  const handleChange = ({target:{name, value}}) => setUser({...user,[name]:value}) //actualizar estado

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try{
      await signup(user.email, user.password)
      navigation.navigate('ScreenHome');
    } catch (error){
      getError(error)//mando a la funcion el error por parametro
    }
  } 
  return (
    
    <View style={style.container}>
      {errorType && <p>{errorType}</p>}
      <label>Correo Electronico</label>
      <input type="text" name='email' placeholder='Ingrese su Correo electrónico' onChange={handleChange}/>
      <label>Contraseña</label>
      <input type="password" name='password' placeholder='Ingrese su Contraseña' onChange={handleChange}/>
      <button onClick={handleSubmit}>Crear Cuenta</button>
      <button onClick={()=> navigation.navigate('ScreenLogin')}>Ya tengo cuenta</button>
    </View>
  )
}
