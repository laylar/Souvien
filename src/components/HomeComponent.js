import React, { Component } from "react";
//import CurrDate from "./CalendarComponent";
import Quote from "./QuoteComponent";
import Entry from "./EntryComponent";
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
            <div className="container">
              <br />
              <DatePicker onChange={this.onChange} value={this.state.date} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NewEntryForm />
          </div>
        </div>
        <div className="row row-content">
          <div className="col entry-text">
            {/**When not logged in this page will show a login page.
                    The section above this will be stuck to the top. The entries below can scroll.
                    **/}
            <Entry
              dateVal={moment(this.state.date.toString()).format("MMM DD")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
