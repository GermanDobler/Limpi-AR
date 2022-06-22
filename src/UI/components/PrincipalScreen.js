import react, { Fragment } from "react";
import { View } from "react-native-web";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/PrincipalScreen.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sector from "./Sector";
//import Col from 'react-bootstrap/Col'
export default function PrincipalScreen() {
    return (
        <div className="fondo">
        <View>
            <Row>
                <Col md="">
                    hola
                </Col>
                <Col md="">
                    Bienvenido Usuario
                </Col>
                <Col md="">
                    juancarlos
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
        </View>
        </div>
    );
}