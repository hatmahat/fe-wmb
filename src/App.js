import { Component } from 'react';
import './App.css';
import LoginForm from './components/Login';
import Dashboard from './components/Dasboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            menus: [
              {
                  id: 'M001',
                  name: 'Nasi Goreng',
                  price: '15.000',
              },
              {
                  id: 'M002',
                  name: 'Mie Goreng',
                  price: '17.000',
              },
          ],
          tables: [
              {
                  id: 'T001',
                  isAvailable: true,
              },
              {
                  id: 'T002',
                  isAvailable: false,
              },
          ],
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
                    <Dashboard menus={this.state.menus} tables={this.state.tables} func={this.logout} />
                ) : (
                    <LoginForm func={this.loginSuccess} />
                )}
            </>
        );
    }
}

export default App;
