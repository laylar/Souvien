import React, {Component} from 'react';
import {Card, CardTitle, CardText, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Calendar from 'react-calendar';

class CurrDate extends Component {
//More info here: https://www.npmjs.com/package/react-calendar
//Examples here: https://github.com/wojtekmaj/react-calendar/wiki/Recipes
    state = {
        date: new Date(),
      }
     
      onChange = date => this.setState({ date })
     
      render() {
        return (
          <div>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
        );
      }
    }

function Home (props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <Card>
                        <Form>
                            <FormGroup>
                                <Label for="entry-data"></Label>
                                <Input type="textarea" name="newentry" id="entry-data" />
                            </FormGroup>
                            <Button>Save The Day</Button>
                        </Form>
                    </Card>
                </div>
                <div className="col-md-3">
                    <CurrDate />
                </div>
                
            </div>
            <div className="row row-content">
                <div className="col">
                    <p>
                        <b>When not logged in this page will show a login page.</b>
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