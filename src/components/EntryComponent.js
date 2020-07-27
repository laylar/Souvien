import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEntries } from "../redux/ActionCreators";
import { Card, CardTitle, CardText } from "reactstrap";

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
        <div key={dayEntries.year}>
          {dayEntries
            .map((entry) => (
              <div className="col-md-8 centered">
                <Card>
                  <CardTitle>
                    <span className="year-text">
                      {entry.year}
                      {/* {entry.dayname.substring(0, 3)} */}
                    </span>
                  </CardTitle>
                  <CardText>{entry.text}</CardText>
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
            (entry) => entry.day == this.props.dateVal
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
