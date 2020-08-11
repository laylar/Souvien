import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEntries } from "../redux/ActionCreators";
import { Card, CardTitle, CardText } from "reactstrap";
import moment from "moment";

const mapDispatchToProps = {
  fetchEntries: () => fetchEntries(),
};

const mapStateToProps = (state) => ({
  entries: state.entries,
});

function RenderEntries({ dayEntries }) {
  if (dayEntries) {
    return (
      <React.Fragment>
        <div key={dayEntries.id}>
          {dayEntries
            .map((entry) => (
              <div className="col-md-8 centered">
                <Card>
                  <CardTitle>
                    <span className="year-text">
                      {moment(entry.day.toString()).format("YYYY")}
                      {"   "}
                      {moment(entry.day.toString()).format("ddd")}
                    </span>
                  </CardTitle>
                  <div className="col-md-11 centered">
                    <CardText>{entry.text}</CardText>
                  </div>
                </Card>
                <br />
              </div>
            ))
            .reverse()}
        </div>
      </React.Fragment>
    );
  }
}

class Entry extends Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {
    if (this.props.entries.entries.length > 0) {
      return (
        <RenderEntries
          dayEntries={this.props.entries.entries.filter(
            (entry) =>
              moment(entry.day.toString()).format("MMM DD") ===
              this.props.dateVal
          )}
        />
      );
    } else {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Entry));
