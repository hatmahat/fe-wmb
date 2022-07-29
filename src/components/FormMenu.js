import { Component } from 'react';

class FormMenu extends Component {
    constructor(props) {
        super(props);
    }
    handleCancel = () => {
        this.props.cancel();
    };
    handleSubmit = (event) => {
        this.props.handleSubmit(event);
    };
    handleId = (event) => {
        this.props.handleId(event);
    };
    handleName = (event) => {
        this.props.handleName(event);
    };
    handlePrice = (event) => {
        this.props.handlePrice(event);
    };
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>ID</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="please enter id"
                        onChange={this.handleId}
                    />
                    <small className="error">{this.props.errorId}</small>
                    <br />
                    <label>Nama</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="please enter name"
                        onChange={this.handleName}
                    />
                    <small className="error">{this.props.errorName}</small>
                    <br />
                    <label>Harga</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="please enter price"
                        onChange={this.handlePrice}
                    />
                    <small className="error">{this.props.errorPrice}</small>
                </form>
                <br />
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleSubmit} // ke page tambah menu
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.handleCancel} // ke page tambah menu
                >
                    Cancel
                </button>
            </>
        );
    }
}

export default FormMenu;
