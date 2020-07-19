import React from 'react';
import {Card, CardTitle, CardText} from 'reactstrap';


function Home (props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <Card>
                        <CardTitle>Entry Date: July 19th, 2020</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                    </Card>

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
                    <Card>
                        <CardTitle>Entry Date: July 19th, 2019</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                    </Card>
                    <Card>
                        <CardTitle>Entry Date: July 19th, 2018</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                    </Card>
                    <Card>
                        <CardTitle>Entry Date: July 19th, 2017</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                    </Card>

                </div>
            </div>

        </div>
    );
}

export default Home;