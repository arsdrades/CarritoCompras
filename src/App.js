import React from 'react';
import Producto from './componentes/Producto';
import './App.css';
import { Container,Row } from 'reactstrap';
import Navegacion from './componentes/Navegacion';
import {listaproductos} from './listaProductos.json';

console.log(listaproductos);
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      listaproductos
    };
  }
  render(){
    const arregloComponente = this.state.listaproductos.map(
      (listaproductos, i) => {
        
        return(
          <Producto
          key={i}
          titulo={listaproductos.titulo}
          precio={listaproductos.precio}
          img={listaproductos.img}
          texto={listaproductos.texto}
          stock={listaproductos.stock}

          />
        )

      }
    );
    return (
      <Container>
        <Navegacion titulo="Carrito de Compras"/>
        <Row>
          {arregloComponente}
        </Row>
      </Container>
    );
  }

  }



export default App;
