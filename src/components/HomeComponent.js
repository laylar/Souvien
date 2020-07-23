import React, {Component} from 'react';
import {Card, CardTitle, CardText, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import DatePicker from 'react-date-picker';

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
            <DatePicker
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
        );
      }
    }
/* This is where I'll render the quote based on the date selected.
    function RenderQuote({ quote }) {
        return (
            <Card>
                <Link to={`/directory/${campsite.id}`}>
                    <CardImg width="100%" src={baseUrl + campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
    
        )
    }
*/

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
                        
                        <hr />
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