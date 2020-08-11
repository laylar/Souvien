import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>
            <div className="row">
                <div>
                    <h3 className="title-text">About</h3>
                    <br />
                    <div className="entry-text">
                        <p>Ever wanted to know what you did a year ago? Two years ago?</p>

                        <p>Who were you and who will you become?</p>

                        <p>Built in 2020, an eventful year for the whole world, this is a journal application
                        intended to help you build self-reflective practice around who you've been,
                        what you've done, and who you'd like to see yourself become. With a sentence or two each day,
                        or even just a word, you can effectively save a piece of each day of the year,
                            like mini time-capsules for your future self to learn from.</p>

                        <p>What do you want to remember about today?</p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default About;