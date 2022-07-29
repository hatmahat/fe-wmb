import { Component } from 'react';
import { PropTypes } from 'react'
import './App.css';
import LoginForm from './components/Login';

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

    render() {
        return (
            <>
                <LoginForm func={this.loginSuccess} />
            </>
        );
    }
}

export default App;
