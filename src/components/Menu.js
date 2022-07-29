import { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
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
        );
    }
}

export default Menu;
