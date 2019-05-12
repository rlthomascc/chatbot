/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import User from './components/User.js';
import Display from './components/Display.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convo: [],
    };
  }

  sendMessage(e) {
    const { convo } = this.state;
    const newArr = convo;
    newArr.push({ user: 'John Doe', message: e });
    this.setState({
      convo: newArr,
    });
    console.log(convo, 'convo');
  }


  // CREATE A FUNCTION THAT CHECKS THE MESSAGES WITH THE QUESTIONS AND SENDS.
  render() {
    const { convo } = this.state;
    return (
      <div className="mainContainer">
        <Display messages={convo} />
        <User sendMessage={this.sendMessage.bind(this)} />
      </div>
    );
  }
}

export default App;
