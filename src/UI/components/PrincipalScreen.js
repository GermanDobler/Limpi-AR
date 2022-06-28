import react, { Fragment, useState } from "react";
import { View } from "react-native-web";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/PrincipalScreen.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sector from "./Sector";
import Cancel from "./Cancel";
import Guardar from "./Guardar";
import SvgFlechaizq from "./SvgFlechaizq";
import SvgPerfil from "./SvgPerfil"
//import Col from 'react-bootstrap/Col'
export default function PrincipalScreen(props) {
    const sectores = [
        { id:1, nombre: 'Direccion', estado: 'limpio'},
        { id:2, nombre: 'Taller - Soldadura', estado: 'sucio'},
        { id:3, nombre: 'Pallillo', estado: 'sucio'},
        { id:4, nombre: 'Taller - Carpinteria', estado: 'sucio'},
        { id:5, nombre: 'Aula', estado: 'limpio'},
    ];
    return (
        <Fragment>
            <div className="fondo">
                <Row className="header">
                    <Col sm="2">
                        <SvgFlechaizq />
                    </Col>
                    <Col sm="8">
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
                    {sectores.map(sector =>(
                        <Sector key={sector.id} nombre={sector.nombre} estado={sector.estado}></Sector>
                    )) }
                </Row>
                <Row className="container-sector">
                    <Col sm="4">
                        <Cancel eliminar="Cancelar"></Cancel>
                    </Col>
                    <Col sm="4"></Col>
                    <Col sm="4">
                        <Guardar guardar="Guardar Cambios"></Guardar>
                    </Col>
                </Row> 
            </div>
        </Fragment>
    );
}