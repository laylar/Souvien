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
                <div>
                    <h3>Contact</h3>
                    <p><i>Have some ideas, comments, thoughts?</i></p>

                    <p>Feel free to reach out!</p>

                    <p>Built in 2020, an eventful year for the whole world, this is a journal application
                    intended to help you build self-reflective practice around who you've been,
                    what you've done, and who you'd like to see yourself become. With a sentence or two each day,
                    or even just a word, you can effectively save a piece of each day of the year,
                        like mini time-capsules for your future self to learn from.</p>

                    <p><i>What do you want to remember about today?</i></p>
                </div>
            </div>

        </div>
        );
    };
}

export default Contact;