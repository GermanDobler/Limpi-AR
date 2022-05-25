import react from "react";
import {Text} from "react-native"

//Con los props reutilizamos codigo, con un solo componente hacemos varios saludos
export default function Saludar(props){
    const {name} = props;
    console.log(name);

    //El return es jsx!!!
    //Las variables se envuelven entre {}
    return <Text>Pesadillas {name}</Text>
}