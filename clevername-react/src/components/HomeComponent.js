import React, { Component } from "react";
//import CurrDate from "./CalendarComponent";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEntries } from "../redux/ActionCreators";
import Quote from "./QuoteComponent";
import Entry from "./EntryComponent";
// import NewEntryForm from "./NewEntryFormComponent";
import DatePicker from "react-date-picker";
import moment from "moment";

const mapDispatchToProps = {
  fetchEntries: () => fetchEntries(),
};

const mapStateToProps = (state) => ({
  entries: state.entries,
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  state = {
    date: new Date(),
  };
  onChange = (date) => this.setState({ date });
  render() {
    let dateVal = new Date();
    let dateLong = new Date();

    if (this.state.date > 0) {
      dateVal = moment(this.state.date.toString()).format("MMM DD");
      dateLong = moment(this.state.date.toString()).format("MMM DD YYYY");
    } else {
      dateVal = moment(dateVal.toString()).format("MMM DD");
      dateLong = moment(dateLong.toString()).format("MMM DD YYYY");
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Quote dateVal={dateVal} />
            <div className="container">
              <br />
              <DatePicker onChange={this.onChange} value={this.state.date} />
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col entry-text">
            {/**When not logged in this page will show a login page.
                    The section above this will be stuck to the top. The entries below can scroll.
                    **/}
            <Entry dateVal={dateVal} dateLong={dateLong} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
