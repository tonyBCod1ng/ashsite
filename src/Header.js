import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

export default function Header(props){
    return(
  <header>
    <Navbar bg="dark" variant="dark">
      <Container >
      <Navbar.Brand href="#home" >{props.brand}</Navbar.Brand>
      <Nav>
          {props.list.map((item, index) =>{
            return(
              <Nav.Link key={index} href={item.url}>{item.name}</Nav.Link>
            )
          })}
      </Nav>
      </Container>
    </Navbar>
</header>
    )
}