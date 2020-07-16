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
                        <p>
                            <b>When not logged in this page will show a login page.</b>
                        </p>
                        <p>
                            <b>When logged in: </b>
                        </p>
                        <p>
                            A Textbox for entering journal entry for the day will go here...
                            ...next to the entry box there will be a quote associated with the date
                        </p>
                        <p><i>The section above this will be stuck to the top. The entries below can scroll.</i></p>
                        <p>
                            all the previous entries on this date go here...
                            ...and next to that is a calendar to select other dates with a search box underneath
                        </p>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;