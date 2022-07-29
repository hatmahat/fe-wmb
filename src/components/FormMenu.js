import { Component } from 'react';

class FormMenu extends Component {
    constructor(props) {
        super(props);
    }
    handleCancel = () => {
        this.props.cancel()
    }
    render() {
        return (
            <>
                <h1>Hai From FromMenu</h1>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleCancel} // ke page tambah menu
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
