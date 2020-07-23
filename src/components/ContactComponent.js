import React, { Component } from 'react';

class Contact extends Component {
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
                        <div className="title-text">Contact</div>
                        <div className="entry-text">
                            <p><i>Have some ideas, comments, thoughts?</i></p>
                            <p>Feel free to reach out!</p>
                            <p>Lorem ipsum there will be a form here soon but I've got to take up a bunch of space here so the page looks a little fuller....</p>
                        </div>
                        <button>This is where the submit button will go!</button>
                    </div>
                </div>

            </div>
        );
    };
}

export default Contact;