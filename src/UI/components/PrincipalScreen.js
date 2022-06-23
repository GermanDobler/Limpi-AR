import react, { Fragment } from "react";
import { View } from "react-native-web";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/PrincipalScreen.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sector from "./Sector";
import SvgFlechaizq from "./SvgFlechaizq";
import SvgPerfil from "./SvgPerfil"
//import Col from 'react-bootstrap/Col'
export default function PrincipalScreen(props) {
    return (
        <div className="fondo">
        <View>
            <Row>
                <Col md="3">
                    <SvgFlechaizq />
                </Col>
                <Col md="4">
                    Bienvenido {props.nombre} 
                </Col>
                <Col md="5">
                    <SvgPerfil></SvgPerfil>
                </Col>
            </Row>
            <Row className="seccion">
                <label>Secciones</label>
            </Row>
            {/* props(estado=(sucio/limpio)) */}
            <Sector estado="sucio" nombre="Pasillo"></Sector>
            <Sector estado="limpio" nombre="Aula"></Sector>
            <Sector estado="sucio" nombre="Sum"></Sector>
            <Sector estado="limpio" nombre="Taller"></Sector>
            <Sector estado="sucio" nombre="Cocina"></Sector>
            <Sector estado="sucio" nombre="Patio"></Sector>
            <Sector estado="limpio" nombre="Aula"></Sector>
            <Sector estado="limpio" nombre="Aula"></Sector>

        </View>
        </div>
    );
}