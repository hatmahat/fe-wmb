import { Component } from 'react';
import { Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import Menu from './Menu';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    id: 'M001',
                    name: 'Nasi Goreng',
                    price: '15.000',
                },
                {
                    id: 'M002',
                    name: 'Mie Goreng',
                    price: '17.000',
                },
            ],
            showMenu: false,
        };
    }
    handelMenu = () => {
        this.setState({
            showMenu: true,
        });
        console.log("SSS", this.state.showMenu)
    };
    logout = () => {
        this.props.func();
    };
    render() {
        return (
            <>
                <NavbarBS bg="dark" variant="dark" expand="lg">
                    <Container>
                        <NavbarBS.Brand href="#home">Dashboard</NavbarBS.Brand>
                        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                        <NavbarBS.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={this.handelMenu}>
                                    Menu
                                </Nav.Link>
                                <Nav.Link>Table</Nav.Link>
                                <Nav.Link onClick={this.logout}>
                                    Logout
                                </Nav.Link>
                            </Nav>
                        </NavbarBS.Collapse>
                    </Container>
                </NavbarBS>
                <div>
                    {this.state.showMenu ? <Menu menus={this.state.menus} /> : <h1>Welcome! Please select on the navbar to continue</h1>}
                </div>
            </>
        );
    }
}

export default Dashboard;
