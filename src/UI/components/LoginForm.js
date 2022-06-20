//Siempre deben de importar la estructura de react
import react from "react";
//Este import genera la transición a los react
import { TextInput, Button, Text, View } from "react-native";
import './styles/LoginForm.css';
export default function LoginForm() {
    return (

        <div className="fondo">
                <img src={require('./logo.png')} className="img" />
            <div className="contenedor_form">
                <View>
                    <TextInput placeholder="Usuario/Email" className="input" />
                    <br />
                    <TextInput placeholder="Contraseña" className="input" />
                    <br />
                    <Button title="Aceptar" onPress={() => console.log("Enviar")} />
                    <br />
                    <Button title="Cancelar" onPress={() => console.log("Cancelar")} />
                </View>
            </div>
        </div>
    )
}


