/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const User = (props) => {
  const handleSubmit = (e) => {
    const { sendMessage } = props;
    e.preventDefault();
    sendMessage(e.target.question.value);
  };


  const form = () => (
    <div className="userContainer">
      <form onSubmit={handleSubmit.bind(this)}>
        <div className="form-group">
          <input className="form-control" id="question" type="text" placeholder="Ask me a question.." required />
        </div>
        <div>
          <button className="btn btn-success">Send</button>
        </div>
      </form>
    </div>
  );

  return (
    form()
  );
};

export default User;
