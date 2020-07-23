import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HeaderText from './HeaderTextComponent';

const Menu = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return(
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle outline color="black">
                <h3  className="header-text">----Souvien----</h3>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem tag={NavLink} to="/home">Home</DropdownItem>
                <DropdownItem tag={NavLink} to="/about">About</DropdownItem>
                <DropdownItem tag={NavLink} to="/contact">Contact</DropdownItem>
                <DropdownItem disabled>Settings</DropdownItem>
                <DropdownItem disabled>Sign In</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
}


const Header = (props) => {
    return(
        <React.Fragment>
        <Navbar light sticky="top">
            <div className="container">
            <Menu />
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="header-title"><HeaderText/></h3>
                        
                    </div>
                        
                </div>
                
            </div>
        </Navbar>
    </React.Fragment>
    )
}


export default Header;