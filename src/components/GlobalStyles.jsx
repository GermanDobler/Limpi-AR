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
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    ScreenLoginSignin: {

        container: {
            // padding:'20px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            height: 'auto',
        },
        containerLog: {
            borderTopRightRadius: '35px',
            borderTopLeftRadius: '35px',
            backgroundColor: '#f1f1f1',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        containerFlex: {
            flex: 1,
            display: 'flex',
            width: '70%',
            gap: '20px'
        },
        //Inputs
        containerInput: {
            marginTop: '20px',
            marginBottom:'20px',
            width: '70%',
        },
        input: {
            backgroundColor: '#f1f1f1',
            fontSize: '15px',
            border: '0px',
            borderBottom: '1.2px solid #12121264',
            height: '30px',
            width: '100%',
        },
        //Botones
        button: {
            cursor: 'pointer',
            color: '#ffffffdf',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '500',
            border: '0px solid #12121239',
            borderRadius: '25px',
            height: '45px',
            marginTop: '10px',
            marginBottom: '10px',
            width: '70%',
            background: '#078282',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        },
        buttonGoogle: {
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            fontSize: '20px',
            border: '0.1px solid #12121239',
            borderRadius: '25px',
            padding: '10px',
            width: '100%',
            height: '45px',
            gap: '5px',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        },
        //Titulo-Encabezado
        titulo: {
            marginTop: '10px',
            marginBottom: '8px',
            fontSize: '30px',
        },
        error: {
            color: '#cc0000',
            fontSize: '17px',
            marginBottom: '8px',
            fontWeight: '600'
        }
    }

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