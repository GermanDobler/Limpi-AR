import React from 'react'
import { useStyles } from '../../context/GlobalStyles';

export default function Title(props) {
    const { style } = useStyles();
  return (
    <div style={style.ScreenLoginSignin.titulo}>
        {props.titulo}
    </div>
  )
}
