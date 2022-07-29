import { Component } from 'react';
import './table.css';
import FormTable from './FormTable';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormTable: false,
            tables: this.props.tables,
            id: '',
            isAvailable: '',
            errorId: '',
        };
    }
    handleFormTable = () => {
        this.setState({
            showFormTable: true,
        });
        console.log('SHOW FORM TABLE');
    };
    handleCancel = () => {
        this.setState({
            showFormTable: false,
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
    handleIsStatus = (event) => {
        if (event.target.value !== '') {
            this.setState({
                isAvailable: event.target.value === 'Available' ? true : false,
            });
        }
        console.log(this.state.isAvailable);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.id !== '') {
            const newTable = {
                id: this.state.id,
                isAvailable: this.state.isAvailable,
            };
            this.state.tables.push(newTable);
            this.setState({
                tables: this.state.tables,
            });
            console.log(this.state.tables);
        } else {
            if (this.state.id === '') {
                this.setState({
                    errorId: 'required field',
                });
            }
        }
    };
    render() {
        let tableItems = this.state.tables.map((tableItem) => {
            return (
                <tr>
                    <td>{tableItem.id}</td>
                    <td>
                        {tableItem.isAvailable ? (
                            <text className="available">Available</text>
                        ) : (
                            <text className="unavailable">Unavailable</text>
                        )}
                    </td>
                </tr>
            );
        });
        return (
            <>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleFormTable} // ke page tambah menu
                >
                    Tambah Meja
                </button>
                <div>
                    <br />
                    {this.state.showFormTable ? (
                        <FormTable
                            handleId={this.handleId}
                            handleIsStatus={this.handleIsStatus}
                            handleSubmit={this.handleSubmit}
                            cancel={this.handleCancel}
                            errorId={this.state.errorId}
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
                            <th>Table ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{tableItems}</tbody>
                </table>
            </>
        );
    }
}

export default Table;
