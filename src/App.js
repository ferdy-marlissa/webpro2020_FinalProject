import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { global, indo, provinsi } from './pages'



const App = () =>{
    return (
        <header className="warna2">
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/global">
                                global
                            </Link>
                        </li>
                        <li>
                            <Link to="/indo">
                                indo
                            </Link>
                        </li>
                        <li>
                            <Link to="/provinsi">
                                provinsi
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/indo">
                    <indo />
                </Route>
                <Route path="/provinsi">
                    <provinsi />
                </Route>
                <Route path="/global">
                    <global />
                </Route>
            </Switch>
        </Router>
        </header>
    )
}

export default App;
