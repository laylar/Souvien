import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
//import CurrDate from "./CalendarComponent";
import Quote from "./QuoteComponent";
import NewEntryForm from "./NewEntryFormComponent";
import DatePicker from "react-date-picker";
import moment from "moment";

class Home extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Quote
              dateVal={moment(this.state.date.toString()).format("MMM DD")}
            />
            <NewEntryForm />
            <div className="container">
              <br />
              <DatePicker onChange={this.onChange} value={this.state.date} />
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col entry-text">
            <br />
            {/**When not logged in this page will show a login page.
                    The section above this will be stuck to the top. The entries below can scroll.
                    **/}
            <Card>
              <CardTitle tag="h5">July 19th, 2019</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </Card>
            <br />
            <Card>
              <CardTitle tag="h5">July 19th, 2018</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </Card>
            <br />
            <Card>
              <CardTitle tag="h5">July 19th, 2017</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
