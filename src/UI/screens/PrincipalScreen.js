import react, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../components/styles/PrincipalScreen.css'
import NavBar from '../components/NavBar';
import Sector from "../components/Sector";
import { Container } from "react-bootstrap";
//import Col from 'react-bootstrap/Col'
export default function PrincipalScreen(props) {
    const sectores = [
        { id:1, nombre: 'Dirección', estado: 'limpio', fecha: '2022-1-11', detalles:'Suciedad en el techo'},
        { id:2, nombre: 'Taller - Soldadura', estado: 'sucio',fecha: '2022-2-31'},
        { id:3, nombre: 'Taller - Electricidad', estado: 'sucio',fecha: '2022-5-23'},
        { id:4, nombre: 'Taller - Carpinteria', estado: 'sucio',fecha: '2022-2-3'},
        { id:5, nombre: 'Aula', estado: 'limpio',fecha: '2022-5-21', detalles:'Paredes ralladas'},
        { id:6, nombre: 'Aula', estado: 'limpio',fecha: '2022-6-23'},
    ];

    return (
        <Fragment>
            <NavBar></NavBar>
            <Container>
            {sectores.map(sector =>(
                <Sector key={sector.id} nombre={sector.nombre} estado={sector.estado} fecha={sector.fecha} detalles={sector.detalles} sx={{mb:4}}></Sector>
            ))}
            </Container>
        </Fragment>
    );
}