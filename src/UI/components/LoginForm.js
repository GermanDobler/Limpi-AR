//Siempre deben de importar la estructura de react
import react from "react";
//Este import genera la transición a los react
import {TextInput, Button, Text, View} from "react-native"

//NORMA!!!!! 
//Los componentes siempre empiezan con mayúscula
export default function LoginForm (){
    return(
        //El view permite devolver muchos valores!!!
        //Explicar button y textinput
        <View>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/>
            <Button title="Cancelar" onPress={() => console.log("Cancelar")}/>
        </View>
    )
}