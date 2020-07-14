import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div>
                    <h3>About</h3>
                    <p><i>Ever wanted to know what you did a year ago? Two years ago?</i></p>

                    <p>Who were you and who will you become?</p>

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
}

export default About;