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
      data: [],
    };
  }

  sendMessage(e) {
    const { data } = this.state;
    data.push(e);
  }

  render() {
    const { data } = this.state;
    return (
      <Chatbot sendMessage={this.sendMessage.bind(this)} messages={data} />
    );
  }
}

export default App;
