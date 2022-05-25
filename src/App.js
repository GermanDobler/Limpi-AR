import React from 'react';
import './App.css';

/* function Micomponente(props) {
  console.log(props)
  return(
    <div id="hola">{props.eltexto}</div>
  )
} */
//Hay tres formas de retornar componentes

function App() {
  return (
    <div>Mis componentes:
    <Micomponente eltexto="Tocar boton" subtitle="fdasfasdf"/>
    <Micomponente eltexto="Hola BOTON" subtitle="-------" />
    <Micomponente eltexto="messi"/>
    <Micomponente eltexto="maradona"/>
    </div>
  );
}
//const App = () => <div>Este es mi componente<Micomponente/></div> tambien se puede mostrar asi
class Micomponente extends React.Component {
  /*state ={
    show: true
  }*/
  /*render(){
    if (this.state.show){
      return (
        <div id="hola">
          <h3 id="pelotudear">{this.props.subtitle}</h3>
          {this.props.eltexto}
          <button onClick={() => this.setState({show: false})} id="boton">hola</button>
        </div>
        ) 
    } else {
      return <h1 class="h1hola">No hay elementos</h1>
    }
  }*/
}

export default App;
