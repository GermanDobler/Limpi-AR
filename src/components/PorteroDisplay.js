import react, { useState } from "react";
import { View } from "react-native-web";
import './styles/ImageDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export default function PorteroDisplay(props) {
    let nombre ="Ejemplo"
 
        const  [dropdown, setDropdown]=useState(false);
        const abrirCerrarDropdown=()=>{
         setDropdown(!dropdown);
    }
    const sectores = [
        { id:1,  nombre_portero: 'Juan Perez',},
        { id:2, nombre_portero: 'Jose Hernandez'},
        { id:3,  nombre_portero: 'Federico Vallejos'},
        { id:4,  nombre_portero: 'Ramon Hidalgo'},
        { id:5, nombre_portero: 'Lionel Messi'},
    ];
    
    return (
        <div >
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
            <DropdownToggle caret  className="botonDropdown">
           {props.nombre_portero}
            </DropdownToggle >
            <DropdownMenu>
            {sectores.map(sector =>(
                        <DropdownItem key={sector.id} nombre_lugar={sector.nombre_portero}>{sector.nombre_portero}</DropdownItem>
                    )) }
            </DropdownMenu>
        </Dropdown>
        </div>
    )
}
