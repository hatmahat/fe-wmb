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
            errorIsAvailable: '',
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
                isAvailable:
                    event.target.value === 'Available'
                        ? true
                        : event.target.value === 'Unavailable'
                        ? false
                        : '',
                errorIsAvailable: '',
            });
        } else {
            this.setState({
                errorIsAvailable: 'required field',
            });
        }
        console.log(this.state.isAvailable);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.id !== '' && this.state.errorIsAvailable === '') {
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
            if (this.state.isAvailable === '') {
                this.setState({
                    errorIsAvailable: 'required field',
                });
            }
        }
    };
    handleDelete = (index) => {
        this.state.tables.splice(index, 1);
        this.setState({
            tables: this.state.tables,
        });
    };
    render() {
        let tableItems = this.state.tables.map((tableItem, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{tableItem.id}</td>
                    <td>
                        {tableItem.isAvailable ? (
                            <text className="available">Available</text>
                        ) : (
                            <text className="unavailable">Unavailable</text>
                        )}
                    </td>
                    <td>
                        <button
                            onClick={() => this.handleDelete(index)}
                            type="button"
                            className="btn btn-danger"
                        >
                            DELETE
                        </button>
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
                            errorIsAvailable={this.state.errorIsAvailable}
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
                            <th>No.</th>
                            <th>Table ID</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{tableItems}</tbody>
                </table>
            </>
        );
    }
}

export default Table;
