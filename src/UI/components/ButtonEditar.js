import react, { useState } from "react";
import { View} from "react-native-web";
import './styles/ImageDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ViewBase } from "react-native";



export default function ButtonEditar(props) {

    return (
        < View>
          <input className="editar_boton" type="button" value={props.nombre}/>
        </View>
    );

}