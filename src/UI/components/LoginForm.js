//Siempre deben de importar la estructura de react
import react from "react";
//Este import genera la transición a los react
import {TextInput, Button, Text, View} from "react-native";
import './styles/LoginForm.css';
//NORMA!!!!! 
//Los componentes siempre empiezan con mayúscula
export default function LoginForm (){
    return(
        //El view permite devolver muchos valores!!!
        //Explicar button y textinput
        <div className="contenedor_form">
            <View>
                <TextInput placeholder="Usuario/Email" className="input"/>
                <br/>
                <TextInput placeholder="Contraseña" className="input"/>
                <br/>
                <Button title="Aceptar" onPress={() => console.log("Enviar")}/>
                <br/>
                <Button title="Cancelar" onPress={() => console.log("Cancelar")} />
            </View>
        </div>
    )
}


