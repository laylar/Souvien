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
            {
              this.props.quotes.quotes.filter(
                (quote) => quote.day === this.props.dateVal
              )[0].quote
            }
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
            {
              demoQuotes.filter((quote) => quote.day === this.props.dateVal)[0]
                .quote
            }
          </div>
          <div className="author-text">
            --
            {
              demoQuotes.filter((quote) => quote.day === this.props.dateVal)[0]
                .author
            }
          </div>
          <p className="disclaimer-text">
            This is a work in progress that is not yet fully interactive. <br />
            You can select different dates to display other quotes and entry
            data. <br /> If you'd like to reach out or check out the code, you
            can find this project at: <br />
            <a href="https://github.com/laylar/Souvien/tree/demo">
              https://github.com/laylar/Souvien/tree/demo
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h4>In order to write about life first you must live it.</h4>
          <h5>- Ernest Hemingway</h5>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quote));
