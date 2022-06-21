import React from "react";
import reactDOM from'react-dom';
import'./index.css';
import Formulario from "../Formulario";
reactDOM.render(
    <React.StrictMode>
            <div className="contenedor">
            <Formulario/>
            
            </div>
    </React.StrictMode>,
    document.getElementById('root')
    
);