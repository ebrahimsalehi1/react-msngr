import React, {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route} from "react-router-dom";
import MenuAppBar from "Components/AppBar"
import {createBrowserHistory} from 'history';
import {LoginProvider} from "./Utils/StateManagement";
import SimpleTable from './Components/hosco/SimpleTable';

const history = createBrowserHistory();
const Index = lazy(() => import('Components/Index'));
const Users = lazy(() => import('Components/Users'));
const Home = lazy(() => import('Components/Home'));

/**
 * Main File
 * @returns {*}
 * @constructor
 */
function App() {

    /**
     * initial first states for authentication
     * @type {{authenticated: boolean}}
     */
    const initialAuthState = {
        authenticated: false
    };

    /**
     * create Reducer for authentication context
     * @param state
     * @param action
     * @returns {*}
     * @constructor
     */
    const AuthenticationReducer = (state, action) => {
        switch (action.type) {
            case 'changeAuthenticate':
                return {
                    ...state,
                    authenticated: action.authenticated
                };

            default:
                return state;
        }
    };

    return (
        <div className="App">
            <LoginProvider
                initialState={initialAuthState}
                reducer={AuthenticationReducer}>
                <Router history={history}>
                    <MenuAppBar history={history}/>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Route path="/" exact component={Index}/>
                                <Route path="/about/" component={Home}/>
                                <Route path="/users/" component={Users}/>
                            </Suspense>
                        </div>
                    </header>
                    
                <SimpleTable />

                </Router>
            </LoginProvider>
        </div>
    );
}

export default App;
