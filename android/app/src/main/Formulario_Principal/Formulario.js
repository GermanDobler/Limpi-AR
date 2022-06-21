import React from "react";
const Formulario = () => {
    return (
        <>
        <form className="formulario">
        <div>
            <label htmlFor="DNI">DNI</label>
                <Input type="text" id="DNI" name="DNI" placeholder="43.234.234" />
            </div>

                <div>
                    <label htmlFor="contraseña">contraseña</label>
                        <Input type="password" id="contraseña" name="contraseña" placeholder="*******" />
        </div>
        <button type="submit">iniciar sesión</button>
        <button type="submit">cancelar</button>
        </form>
        </>
    );
}
export default Formulario;