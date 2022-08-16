import react, { useState, Fragment } from "react";
import { View, } from "react-native-web";
import SvgFlechaizq from "./SvgFlechaizq";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ImageDisplay.css';
import { Row, Col } from 'react-bootstrap'
import PorteroDisplay from "./PorteroDisplay";
import Cancel from "./Cancel";

export default function AsignarPortero(props,{navigation}) {
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
                    <Cancel eliminar="Cancelar" onPress= {() => {navigation.navigate('PersonalInfo')}}></Cancel>
                </Row>
                <br /><br />
            </View>
        </div>
    )
}