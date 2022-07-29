import { Component } from 'react';
import { PropTypes } from 'react';
import './App.css';
import LoginForm from './components/Login';
import Dashboard from './components/Dasboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
        };
    }

    loginSuccess = () => {
        this.setState({
            login: true,
        });
        console.log('yeay');
    };

    logout = () => {
        this.setState({
            login: false,
        });
    };

    render() {
        return (
            <>
                {/* <Dashboard /> */}
                {this.state.login ? (
                    <Dashboard func={this.logout} />
                ) : (
                    <LoginForm func={this.loginSuccess} />
                )}
            </>
        );
    }
}

export default App;
