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
    const accionPrueba=(props)=>{
     
    }
    
    return (
        <div >
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
            <DropdownToggle caret  className="botonDropdown">
            {props.nombre_Sector}
            </DropdownToggle >
            <DropdownMenu>
                <DropdownItem onClick={()=>accionPrueba()}>{props.nombre_lugar}</DropdownItem>
                <DropdownItem>{props.nombre_lugar}</DropdownItem>
                <DropdownItem>{props.nombre_lugar}</DropdownItem>
                <DropdownItem>{props.nombre_lugar}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </div>
    )
}
