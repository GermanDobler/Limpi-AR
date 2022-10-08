import { View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useStyles } from '../context/GlobalStyles';
export default function ScreenLogin({navigation}) {
  const { login } = useAuth();
  const [ error, setError ] = useState('');
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
      if(error.code === 'auth/invalid-email'){
        setError('Correo electrónico invalido');
      } else if(error.code === 'auth/internal-error'){
        setError('No ingresó contraseña')
      } else if(error.code === 'auth/weak-password'){
        setError('Contraseña muy corta')
      } else if(error.code === 'auth/user-not-found'){
        setError('El usuario no existe/ Registrate')
      }
    }
  } 

    return (
        <View>
            {error && <p>{error}</p>}
            <label>Correo Electronico</label>
            <input type="text" name='email' placeholder='Ingrese su Correo electrónico' onChange={handleChange} />
            <label>Contraseña</label>
            <input type="password" name='password' placeholder='Ingrese su Contraseña' onChange={handleChange} />
            <button onClick={handleSubmit}>Iniciar sesión</button>
            <button onClick={()=>navigation.navigate('ScreenSignin')}>Registrate</button>
        </View>
    )
}
