import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Jumbotron,
} from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col center centered-text mx-auto header-title">
                                <h1>Souvien</h1>
                                <h2>Daily tidbits for future-self.</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <nav className="navbar navbar-expand-sm navbar-light sticky-top">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#souvienmenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="souvienmenu">
                            <ul className="navbar-nav">
                                <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="settings">Settings</a></li>
                                <li className="nav-item"><a className="nav-link" href="about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;