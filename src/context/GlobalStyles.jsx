import React, { createContext, useContext } from "react";
/*Usar el context*/
export const useStyles = () => {
    const contextStyles = useContext(StyleContext);
    return contextStyles;
}
/*Usar el context*/

const styles = {
    mainContainer: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        flex: 1,
        backgroundColor: '#f1f1f1',
        width:'100vw',
        height:'100vh',
        maxWidth:'100%',
        maxHeight:'100%',
    },
    container_hola:{
        padding:'20px'
    },
    container: {
        // marginTop:'50px',
        borderRadius:'35px',
        backgroundColor:'#f1f1f1',
        // padding:'3%',
        // height:'40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerFlex: {
        display: 'flex',
        width: '70%',
        gap: '30px'
    },
    //Inputs
    input: {
        // textAlign: 'center',
        backgroundColor:'#f1f1f1',
        fontSize: '15px',
        border:'0px',
        borderBottom: '1px solid #121212',
        // borderRadius: '25px',
        height: '30px',
        marginTop: '10px',
        marginBottom: '10px',
        width: '70%',
    },
    //Botones
    button: {
        textAlign: 'center',
        fontSize: '15px',
        border: '0.1px solid #12121239',
        borderRadius: '25px',
        height: '40px',
        marginTop: '10px',
        marginBottom: '10px',
        width: '70%'
    },
    //Titulo-Encabezado
    titulo:{
        marginTop: '10px',
        marginBottom: '14px',
        fontSize:'30px',
    },
    

};
const StyleContext = createContext();
const StyleProvider = ({ children }) => {
    const [style, setstyle] = React.useState(styles)
    // const handlestyle = () => {
    //     if (style === styles.dark) {
    //         setstyle(styles.light);
    //     } else {
    //         setstyle(styles.dark);
    //     }
    //     console.log("handleteme")
    // }
    // const data = { style, handlestyle };
    const data = { style }
    return (
        <StyleContext.Provider value={data}>{children}</StyleContext.Provider>
    )
}
export { StyleProvider };
export default StyleContext;