import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "An email from the Souvien Website",
      message: "",
      mailSent: false,
      error: null,
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();

    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form action="#">
          <div className="row row-content">
            <div className="col">
              <br />
              <div className="title-text">Contact</div>
              <hr />
              <p>
                Please let me know if you have any questions, comments,
                thoughts, ideas, or just want to connect!
              </p>
              <div className="entry-text centered">
                <label hidden={true}>Your Name</label>
                <input
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />

                <label hidden={true}>Email</label>
                <input
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />

                <label hidden={true}>Message</label>
                <textarea
                  value={this.state.message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                  id="message"
                  name="message"
                  placeholder="Tell me about it..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row row-content">
            <div className="col">
              <input
                type="submit"
                onClick={(e) => this.handleFormSubmit(e)}
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
