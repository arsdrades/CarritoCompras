import React from "react";
import { ModalFooter,ModalHeader,ModalBody ,Modal,Button, Container, CardImg } from "reactstrap";
import {listaCarrito} from '../listaCarrito.json' 

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {modal:false, listaCarrito};
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
        console.log(this.props);

    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader> <p>Producto:   {this.props.props.titulo}</p></ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.img}/>
                        {this.props.props.precio}</ModalBody>
                    <ModalBody>{this.props.props.texto}
                    {this.props.props.stock}
                    </ModalBody>
                    <ModalFooter>
                    <Button color="dark" onClick={this.agregarCarrito}>Agregar</Button>
                    <Button onClick={this.toggle}>Volver atras</Button>
                    </ModalFooter>
                    
                </Modal>
            </Container>
            

        )
    }
}
export default FichaProducto;