import react, { useState } from "react";
import { View } from "react-native-web";
import './styles/ImageDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export default function SectorDisplay(props) {
    let nombre ="Ejemplo"
 
        const  [dropdown, setDropdown]=useState(false);
        const abrirCerrarDropdown=()=>{
         setDropdown(!dropdown);
    }
    const sectores = [
        { id:1,  nombre_lugar: 'Pasillo Taller',},
        { id:2, nombre_lugar: 'Baños Taller'},
        { id:3,  nombre_lugar: 'Aula 1'},
        { id:4,  nombre_lugar: 'Au'},
        { id:5, nombre_lugar: 'limpio'},
    ];
    
    return (
        <div >
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
            <DropdownToggle caret  className="botonDropdown">
            {props.nombre_Sector}
            </DropdownToggle >
            <DropdownMenu>
            {sectores.map(sector =>(
                        <DropdownItem key={sector.id} nombre_lugar={sector.nombre_lugar}>{sector.nombre_lugar}</DropdownItem>
                    )) }
            </DropdownMenu>
        </Dropdown>
        </div>
    )
}