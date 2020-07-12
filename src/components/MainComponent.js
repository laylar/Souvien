import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
//import Footer from './FooterComponent';
//import Contact from './ContactComponent';
//import About from './AboutComponent';
//import Directory from './DirectoryComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //const HomePage = () => {
        //    return (
        //        <Home />
        //    )
        //}

        return (
            <div>
                <Header />
                <Home />
            </div>
        )
    }
}

export default Main;