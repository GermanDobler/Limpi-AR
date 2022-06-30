import react, { Fragment, useState } from "react";
import { View } from "react-native-web";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/PrincipalScreen.css'
import NavBar from './NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sector from "./Sector";
import Cancel from "./Cancel";
import Guardar from "./Guardar";
import SvgFlechaizq from "./SvgFlechaizq";
import SvgPerfil from "./SvgPerfil"
import { Container } from "react-bootstrap";
import { Box } from "@material-ui/core";
//import Col from 'react-bootstrap/Col'
export default function PrincipalScreen(props) {
    const sectores = [
        { id:1, nombre: 'Dirección', estado: 'limpio'},
        { id:2, nombre: 'Taller - Soldadura', estado: 'sucio'},
        { id:3, nombre: 'Taller - Electricidad', estado: 'sucio'},
        { id:4, nombre: 'Taller - Carpinteria', estado: 'sucio'},
        { id:5, nombre: 'Aula', estado: 'limpio'},
        { id:6, nombre: 'Aula', estado: 'limpio'},
    ];

    return (
        <Fragment>
            <NavBar></NavBar>
            <Container>
            {sectores.map(sector =>(
                <Sector key={sector.id} nombre={sector.nombre} estado={sector.estado} sx={{mb:4}}></Sector>
            ))}
            </Container>
        </Fragment>
    );
}