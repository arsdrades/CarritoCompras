import React from 'react';
import {CardText,CardSubtitle,CardTitle,CardBody,CardImg,Col,Card} from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
    return(
        <Col sm="4">
        <Card className='Card' body outline color="primary">

            <CardImg src={this.props.img} /> 
            <CardBody>
                <CardTitle> {this.props.titulo}</CardTitle>
                <CardSubtitle>{this.props.precio}</CardSubtitle>
                <CardText>{this.props.texto}</CardText>
                <CardText>{this.props.stock}</CardText>
                <FichaProducto props={this.props} />
            </CardBody>
        </Card></Col>
    ) 
}
}

export default Producto;