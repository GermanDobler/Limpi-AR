import react from "react";
import {Text} from "react-native"
import PropTypes from "prop-types";

//Con los props reutilizamos codigo, con un solo componente hacemos varios saludos
export default function Saludar(props){

    const{ firstname, lastname } = props;

    //Los props los usamos para enviar de una pantalla a otra (manejan estados!!!)

    //El return es jsx!!!
    //Las variables se envuelven entre {}
    return <Text>Pesadillas {firstname} {lastname}</Text>
}

//Se comenta esto, porque estamos pasando el código a Requerido
//Para utilizar dos variables en el props se hace de la siguiente forma
//Saludar.defaultProps = {
//    firstname: "Exequiel",
//    lastname: "Wiedermann",
//};

//Esto es para hacer que el input sea requerido en el formulario
Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
};