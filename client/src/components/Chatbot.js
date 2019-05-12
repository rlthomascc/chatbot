/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const Chatbot = (props) => {
  const handleSubmit = (e) => {
    const { sendMessage } = props;
    e.preventDefault();
    sendMessage(e.target.question.value);
  };

  const form = () => (
    <div className="container">
      <div className="card">
        <div className="card-body" />
        <div className="card-footer">
          <form onSubmit={handleSubmit}>
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

  return (
    form()
  );
};


export default Chatbot;
