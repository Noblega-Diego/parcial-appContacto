
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
export const Header = ()=>{
    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link href={'/'}>Home</Nav.Link>
                    <Nav.Link href={'/contactos'}>Contactos</Nav.Link>
                    <Nav.Link href={'/itemscontactos'}>List Contactos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>)
}