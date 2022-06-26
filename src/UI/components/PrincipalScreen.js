import react, { Fragment, useState } from "react";
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
        <Fragment>
            <div className="fondo">
                <Row className="header">
                    <Col sm="2">
                        <SvgFlechaizq />
                    </Col>
                    <Col sm="8">
                        <Text>Bienvenido {props.nombre}</Text>
                    </Col>
                    <Col sm="2" className="verde">
                        <SvgPerfil></SvgPerfil>
                    </Col>
                </Row>
                <Row className="seccion">
                    <Col >
                        Secciones
                    </Col>
                </Row>
                {/* props(estado=(sucio/limpio)) */}
                <Row className="container-sector">
                    <Sector estado="sucio" nombre="SUM" ></Sector>
                </Row>
                <Row className="container-sector">
                    <Sector estado="sucio" nombre="Carpinteria" ></Sector>
                </Row>
                <Row className="container-sector">
                    <Sector estado="sucio" nombre="Pasillo N°1" ></Sector>
                </Row>
                <Row className="container-sector">
                    <Sector estado="limpio" nombre="Aula" ></Sector>
                </Row>
                <Row className="container-sector">
                    <Sector estado="sucio" nombre="Aula" ></Sector>
                </Row>
                <Row className="container-sector">
                    <CancelSubmit cancelar="Cancelar" guardar="Guardar Cambios"></CancelSubmit> 
                </Row> 
            </div>
        </Fragment>
    );
}