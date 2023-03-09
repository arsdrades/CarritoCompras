import React from "react";
import {Badge, Button,Popover,PopoverHeader,PopoverBody,Table} from 'reactstrap';
import {listaCarrito} from '../listaCarrito.json'


class Carrito extends React.Component{
    constructor(){
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
        };
        this.toggle= this.toggle.bind(this);
    }

toggle(){
    this.setState(prevState => ({
        popoverOpen: !prevState.popoverOpen
    }));
}

    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
return (
    <tr>
        <td>{(i += 1)}</td>
        <td>{listaCarrito.titulo}</td>
        <td>{listaCarrito.precio}</td>
    </tr>
);
            }
        )
        
        return(
            <div>
                <Button id="Popover1" color="info">
                <span className="material-icons-outlined">Carrito</span>
                    <Badge color="secondary">{arregloCarrito.length}</Badge>
                </Button>
                <Popover  placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader> Listado de Compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th> #</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    
                                </tr>  
                       
                            </thead>

                            <tbody>
                                {arregloCarrito}
                            </tbody>
                            <tr>
                                <th>Total: {arregloCarrito.precio} </th></tr>    
                        </Table>
                        
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carrito;