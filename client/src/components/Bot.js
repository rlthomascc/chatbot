/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class Bot extends Component {
  constructor(props) {
    super(props);
  }

  genInitialMessage() {
    const { sendBot } = this.props;
    console.log('here we go');
    setInterval(sendBot('Helooooooooo'), 1000);
    setInterval(sendBot('How may I help you?'), 500);
  }

  render() {
    this.genInitialMessage;
    return (
      null
    );
  }
}

export default Bot;
