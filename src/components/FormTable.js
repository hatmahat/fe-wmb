import { Component } from 'react';

class FormTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAvai: ''
        }
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
    handleStatus = (event) => {
        this.setState({
            isAvai: event.target.value
        })
        console.log(this.state.isAvai)
        this.props.handleIsStatus(event);
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
                    <label>Status</label> <br />
                    <select value={this.state.isAvai} onChange={this.handleStatus}>
                        <option disabled={true} value="">
                            --Pilih status--
                        </option>
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                    </select>
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

export default FormTable;
