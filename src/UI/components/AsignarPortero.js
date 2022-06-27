import react, { useState, Fragment } from "react";
import { View, } from "react-native-web";
import SvgFlechaizq from "./SvgFlechaizq";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ImageDisplay.css';
import { Row, Col } from 'react-bootstrap'
import PorteroDisplay from "./PorteroDisplay";

export default function AsignarPortero(props) {
    return (
        <div className="fondo">
            <View>
                <SvgFlechaizq></SvgFlechaizq>
                <Row>
                    <Col>
                        <h1 className="centrar"> Asignar Portero</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="5">
                    </Col>
                    <Col sm="5">
                        <PorteroDisplay nombre_portero="Asignar Portero" sm="5"/>
                        <br />
                    </Col>
                </Row>
                <br /><br />
            </View>
        </div>
    )
}