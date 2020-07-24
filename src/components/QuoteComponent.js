import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuotes } from "../redux/ActionCreators";

const mapDispatchToProps = {
  fetchQuotes: () => fetchQuotes(),
};

const mapStateToProps = (state) => ({
  quotes: state.quotes,
});

const dateVal = 0;

class Quote extends Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    if (this.props.quotes.quotes.length > 0) {
      return (
        <div className="container">
          <h4>
            <i>{this.props.quotes.quotes[dateVal].quote}</i>
          </h4>
          <h5>--{this.props.quotes.quotes[dateVal].author}</h5>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h4>
            <i>In order to write about life first you must live it.</i>
          </h4>
          <h5>- Ernest Hemingway</h5>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quote));
