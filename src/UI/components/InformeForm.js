import react from "react";
import {View} from 'react-native'
import { Button, TextInput } from "react-native-web";

export default function(){
    return(
        <View>
            <TextInput placeholder="Nombre"></TextInput>
            <TextInput placeholder="Apellido"></TextInput>
            <TextInput placeholder="DNI"></TextInput>
            <TextInput placeholder="Télefono"></TextInput>
            <TextInput placeholder="Dirección"></TextInput>
            <Button title="Aceptar"></Button>
            <Button title="Cancelar"></Button>
        </View>
    )
}