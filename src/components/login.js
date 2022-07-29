import { Component } from 'react';
import './login.css';
import { BsFillLockFill } from 'react-icons/bs';
// import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorEmail: '',
            errorPassword: '',
            notEmptyEmail: false,
            notEmptyPassword: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEmail = (event) => {
        let email = event.target.value;
        this.setState({
            email: email,
        });
        const emailReq = email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if (!emailReq) {
            this.setState({
                errorEmail: 'Email is not valid!',
            });
        } else {
            this.setState({
                errorEmail: '',
                notEmptyEmail: true,
            });
        }
    };
    handleChangePassword = (event) => {
        let password = event.target.value;
        this.setState({
            password: password,
        });
        const passwordReq = password.length >= 6;
        if (!passwordReq) {
            this.setState({
                errorPassword: 'Password must contain at least 6 characters!',
            });
        } else {
            this.setState({
                errorPassword: '',
                notEmptyPassword: true,
            });
        }
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (
            this.state.errorPassword === '' &&
            this.state.errorEmail === '' &&
            this.state.notEmptyEmail &&
            this.state.notEmptyPassword
        ) {
            // alert(
            //     `SUCCESS!\nEmail: ${this.state.email}\nPassword: ${this.state.password}`
            // );
            this.props.func();
        } else {
            const passwordReq = this.state.password.length >= 6;
            if (!passwordReq) {
                this.setState({
                    errorPassword:
                        'Password must contain at least 6 characters!',
                });
            }
            const emailReq = this.state.email
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            if (!emailReq) {
                this.setState({
                    errorEmail: 'Email is not valid!',
                });
            }
        }
    };
    render() {
        return (
            <div className="body">
                <div className="flex-container">
                    <div className="login-container">
                        <div className="login-form">
                            <h2 className="login-header">
                                <BsFillLockFill /> Login Page
                            </h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="login-form-item">
                                    <label>
                                        Email address
                                        <form>
                                            <input
                                                type="text"
                                                className="input"
                                                onChange={
                                                    this.handleChangeEmail
                                                }
                                                value={this.state.email}
                                            />
                                        </form>
                                        <small className="error">
                                            {this.state.errorEmail}
                                        </small>
                                    </label>
                                </div>
                                <br />
                                <div className="login-form-item">
                                    <label>
                                        Password
                                        <form>
                                            <input
                                                type="password"
                                                className="input"
                                                onChange={
                                                    this.handleChangePassword
                                                }
                                                value={this.state.password}
                                            />
                                        </form>
                                        <small className="error">
                                            {this.state.errorPassword}
                                        </small>
                                    </label>
                                </div>
                                <br />
                                <button
                                    variant="primary"
                                    type="submit"
                                    value="submit"
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
