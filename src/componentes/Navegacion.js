import React from "react";
import { Navbar,NavbarBrand,Nav,NavLink,NavItem } from "reactstrap";
import Carrito from "./Carrito";

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="xl">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                
                    <NavItem>
                        <Carrito></Carrito>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Bastián</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Richard</NavLink>
                    </NavItem>
                    </Nav>
                

            

            </Navbar>
            


        );
    }
}
export default Navegacion