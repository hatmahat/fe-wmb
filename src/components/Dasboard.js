import { Component } from 'react';
import { Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import Menu from './Menu';
import Table from './Table';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // menus: [
            //     {
            //         id: 'M001',
            //         name: 'Nasi Goreng',
            //         price: '15.000',
            //     },
            //     {
            //         id: 'M002',
            //         name: 'Mie Goreng',
            //         price: '17.000',
            //     },
            // ],
            // tables: [
            //     {
            //         id: 'T001',
            //         isAvailable: true,
            //     },
            //     {
            //         id: 'T002',
            //         isAvailable: false,
            //     },
            // ],
            menus: this.props.menus,
            tables: this.props.tables,
            showMenu: false,
            showTable: false,
        };
    }
    handleMenu = () => {
        this.setState({
            showMenu: true,
            showTable: false,
        });
        console.log('SSS', this.state.showMenu);
    };
    handleTable = () => {
        this.setState({
            showMenu: false,
            showTable: true,
        });
    };
    handleHome = () => {
        this.setState({
            showMenu: false,
            showTable: false,
        });
    };
    logout = () => {
        this.props.func();
    };
    render() {
        return (
            <>
                <NavbarBS bg="dark" variant="dark" expand="lg">
                    <Container>
                        <NavbarBS.Brand onClick={this.handleHome}>
                            Dashboard Bakari
                        </NavbarBS.Brand>
                        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                        <NavbarBS.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={this.handleMenu}>
                                    Menu
                                </Nav.Link>
                                <Nav.Link onClick={this.handleTable}>
                                    Table
                                </Nav.Link>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={this.logout} // ke page tambah menu
                                >
                                    Logout
                                </button>
                            </Nav>
                        </NavbarBS.Collapse>
                    </Container>
                </NavbarBS>
                <div>
                    {/* {this.state.showMenu ? (
                        <Menu menus={this.state.menus} />
                    ) : (
                        <h1>
                            Welcome to WMB! Please select on the navbar to
                            continue
                        </h1>
                    )}
                    {this.state.showTable ? <Table /> : <></>} */}
                    {this.state.showMenu ? (
                        <Menu menus={this.state.menus} />
                    ) : this.state.showTable ? (
                        <Table tables={this.state.tables} />
                    ) : (
                        <h1>
                            Welcome to WMB! Please select on the navbar to
                            continue
                        </h1>
                    )}
                </div>
            </>
        );
    }
}

export default Dashboard;
