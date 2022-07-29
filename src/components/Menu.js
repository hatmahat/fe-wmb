import { Component } from 'react';
import FormMenu from './FormMenu';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormMenu: false,
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
    }
    render() {
        let menuItems = this.props.menus.map((menuItems) => {
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
                    {/* form menu muncul disini*/}
                    {this.state.showFormMenu ? <FormMenu cancel={this.handleCancel}/> : <></>}
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
