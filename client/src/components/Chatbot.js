/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 6, 7, 8],
    };
  }

  handleSubmit(e) {
    const { data } = this.state;
    const { sendMessage } = this.props;
    e.preventDefault();
    sendMessage(e.target.question.value);
    this.render();
  }


  form() {
    const { data } = this.props;
    const { messages } = this.props;
    console.log(messages, 'MESSAGES IN FORM');
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {messages.map((elem, i) => <li className="list-group-item" key={i}>{elem}</li>)}
            </ul>
          </div>
          <div className="card-footer">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <input className="form-control" id="question" type="text" placeholder="Ask me a question.." required />
              </div>
              <div>
                <button className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      this.form()
    );
  }
}

export default Chatbot;
