import { Component } from 'react';
import FormMenu from './FormMenu';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormMenu: false,
            menus: this.props.menus,
            id: '',
            name: '',
            price: '',
            errorId: '',
            errorName: '',
            errorPrice: '',
        };
    }
    handleFormMenu = () => {
        this.setState({
            showFormMenu: true,
        });
        console.log('SHOW FORM MENU');
    };
    handleCancel = () => {
        this.setState({
            showFormMenu: false,
        });
    };
    handleId = (event) => {
        if (event.target.value !== '') {
            this.setState({
                id: event.target.value,
                errorId: '',
            });
        } else {
            this.setState({
                id: event.target.value,
                errorId: 'required field',
            });
        }
        console.log(this.state.id);
    };
    handleName = (event) => {
        if (event.target.value !== '') {
            this.setState({
                name: event.target.value,
                errorName: '',
            });
        } else {
            this.setState({
                name: event.target.value,
                errorName: 'required field',
            });
        }
        console.log(this.state.name);
    };
    handlePrice = (event) => {
        if (event.target.value !== '') {
            this.setState({
                price: event.target.value,
                errorPrice: '',
            });
        } else {
            this.setState({
                price: event.target.value,
                errorPrice: 'required field',
            });
        }
        console.log(this.state.price);
    };
    handleSubmitTambah = (event) => {
        event.preventDefault();
        if (
            this.state.id !== '' &&
            this.state.name !== '' &&
            this.state.price !== ''
        ) {
            const newMenu = {
                id: this.state.id,
                name: this.state.name,
                price: this.state.price,
            };
            this.state.menus.push(newMenu);
            this.setState({
                menus: this.state.menus,
            });
            console.log(this.state.menus);
        } else {
            if (this.state.id === '') {
                this.setState({
                    errorId: 'required field',
                });
            }
            if (this.state.name === '') {
                this.setState({
                    errorName: 'required field',
                });
            }
            if (this.state.price === '') {
                this.setState({
                    errorPrice: 'required field',
                });
            }
        }
    };
    render() {
        let menuItems = this.state.menus.map((menuItems) => {
            return (
                <tr>
                    <td>{menuItems.id}</td>
                    <td>{menuItems.name}</td>
                    <td>{menuItems.price}</td>
                </tr>
            );
        });
        return (
            <>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleFormMenu} // ke page tambah menu
                >
                    Tambah Menu
                </button>
                <div>
                    <br />
                    {this.state.showFormMenu ? (
                        <FormMenu
                            handleId={this.handleId}
                            handleName={this.handleName}
                            handlePrice={this.handlePrice}
                            handleSubmit={this.handleSubmitTambah}
                            menus={this.state.menus}
                            cancel={this.handleCancel}
                            errorId={this.state.errorId}
                            errorName={this.state.errorName}
                            errorPrice={this.state.errorPrice}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <table
                    style={{ textAlign: 'center' }}
                    className="table table-striped mt-4"
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Harga</th>
                        </tr>
                    </thead>
                    <tbody>{menuItems}</tbody>
                </table>
            </>
        );
    }
}

export default Menu;
