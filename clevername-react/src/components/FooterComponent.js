import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer(props) {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col footer-text">
                                -----
                                <Link to='/home' style={{ color: 'black' }}>Home</Link>
                                -----
                                <Link to='/about' style={{ color: 'black' }}>About</Link>
                                -----
                                <Link to='/contact' style={{ color: 'black' }}>Contact</Link>
                                -----
                        </div>
                    </div>
                </div>
            </footer >
        </React.Fragment>
    )
}

export default Footer;