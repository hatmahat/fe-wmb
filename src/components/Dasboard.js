import { Component } from 'react';
import {
    Container,
    Nav,
    Navbar as NavbarBS,
} from 'react-bootstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    logout = () => {
        this.props.func()
    }
    render() {
        return (
            <NavbarBS bg="dark" variant="dark" expand="lg">
                <Container>
                    <NavbarBS.Brand href="#home">
                        Dashboard
                    </NavbarBS.Brand>
                    <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarBS.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Menu</Nav.Link>
                            <Nav.Link>Table</Nav.Link>
                            <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                        </Nav>
                    </NavbarBS.Collapse>
                </Container>
            </NavbarBS>
        );
    }
}

export default Dashboard;
