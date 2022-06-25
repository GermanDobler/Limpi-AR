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
  
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
            <DropdownToggle caret >
                Sector 1
            </DropdownToggle >
            <DropdownMenu>
                <DropdownItem onClick={()=>accionPrueba()}>Pasillo 1er Piso</DropdownItem>
                <DropdownItem>Pasillo Taller</DropdownItem>
                <DropdownItem>Aula 2</DropdownItem>
                <DropdownItem>Baños planta baja</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
