import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const templateId = "template_0bz0pu8";

    this.sendMessage(templateId, {
      message: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  }

  sendMessage(templateId, variables) {
    window.emailjs
      .send("Souvien_Gmail_Layla", templateId, variables)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Thanks for your message! I look forward to reading it and getting back to you!"
        );
        this.setState({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(
          "Hmm... that didn't seem to go through. Check it out: ",
          err
        );
        alert(
          "Hmm... that didn't go through. Please try again. If it keeps not working, feel free to email me at laylaccounts@icloud.com"
        );
      });
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
                onClick={(e) => this.handleSubmit(e)}
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
