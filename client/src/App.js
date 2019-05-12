/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Chatbot from './components/Chatbot.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 3, 2, 3, 2, 1],
    };
  }

  sendMessage(e) {
    const { data } = this.state;
    data.push(e);
    console.log(data, 'data');
  }


  // CREATE A CHATBOT MESSAGE COMPONENT THAT ASKS QUESTIONS
  // CREATE A CHATBOT DISPLAY THAT DISPLAYS THOSE MESSAGES
  // CREATE A FUNCTION THAT CHECKS THE MESSAGES WITH THE QUESTIONS AND SENDS.
  // HOLD ALL MESSAGES AND CONVO IN A CONVO STATE
  render() {
    const { data } = this.state;
    return (
      <Chatbot sendMessage={this.sendMessage.bind(this)} messages={data} />
    );
  }
}

export default App;
