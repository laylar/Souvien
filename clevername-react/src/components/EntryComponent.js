import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEntries } from "../redux/ActionCreators";
import { Card, CardTitle, CardText } from "reactstrap";
import moment from "moment";
import { ENTRIES } from "../shared/entries";

const mapDispatchToProps = {
  fetchEntries: () => fetchEntries(),
};

const mapStateToProps = (state) => ({
  entries: state.entries,
  demoEntries: ENTRIES,
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
                  <p>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    {"  "}
                    <i class="fa fa-commenting-o" aria-hidden="true"></i>
                  </p>
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
        <RenderEntries
          dayEntries={this.props.demoEntries.filter(
            (entry) =>
              moment(entry.day.toString()).format("MMM DD") ===
              this.props.dateVal
          )}
        />
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Entry));
