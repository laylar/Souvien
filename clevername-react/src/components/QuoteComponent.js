import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuotes } from "../redux/ActionCreators";
import { QUOTES } from "../shared/quotes";

const mapDispatchToProps = {
  fetchQuotes: () => fetchQuotes(),
};

const mapStateToProps = (state) => ({
  quotes: state.quotes,
});

const demoQuotes = QUOTES;

class Quote extends Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    if (this.props.quotes.quotes.length > 0) {
      return (
        <div className="container">
          <div className="quote-text">
            <i>
              {
                this.props.quotes.quotes.filter(
                  (quote) => quote.day === this.props.dateVal
                )[0].quote
              }
            </i>
          </div>
          <div className="author-text">
            --
            {
              this.props.quotes.quotes.filter(
                (quote) => quote.day === this.props.dateVal
              )[0].author
            }
          </div>
        </div>
      );
    } else if (demoQuotes) {
      return (
        <div className="container">
          <div className="quote-text">
            <i>
              {
                demoQuotes.filter(
                  (quote) => quote.day === this.props.dateVal
                )[0].quote
              }
            </i>
          </div>
          <div className="author-text">
            --
            {
              demoQuotes.filter((quote) => quote.day === this.props.dateVal)[0]
                .author
            }
          </div>
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
