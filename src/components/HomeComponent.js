import React, {Component} from 'react';
import {Card, CardTitle, CardText, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import CurrDate from './CalendarComponent';


function Home (props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card>
                        <CardTitle><h4><i>In order to write about life first you must live it.</i></h4></CardTitle>
                        <CardText>- Ernest Hemingway</CardText>
                        <CurrDate />
                        <Form>
                            <FormGroup>
                                <Label for="entry-data"></Label>
                                <Input type="textarea" name="newentry" id="entry-data" />
                            </FormGroup>
                            <Button>Save The Day</Button>
                        </Form>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col entry-text">
                    <br />
                    <p>
                        <b>When not logged in this page will show a login page.</b>
                    </p>
                    <br />
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