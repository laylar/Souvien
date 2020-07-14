import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col">
                        <h3>Home Sweet Home</h3>
                        <p>This is where some welcome home text will go</p>
                        <p>There will be a way to log in.</p>
                        <p>
                            When logged in,
                            Home will be where you see the quote associated with
                            the date and you can add your journal entries!
                    </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;