import React, { createContext } from "react";

const styles = {
    mainContainer:{
        flex:1,
        backgroundColor:'#f1f1f1',
    },
    container:{
        alignItems: 'center',
        justifyContent:'center'
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
    const data ={style}
    return (
        <StyleContext.Provider value={data}>{children}</StyleContext.Provider>
    )
}
export { StyleProvider };
export default StyleContext;