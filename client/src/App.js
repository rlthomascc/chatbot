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
      data: [],
    };
  }

  sendMessage(e) {
    const { data } = this.state;
    const newArr = data;
    newArr.push(e);
    this.setState({
      data: newArr,
    });
    console.log(data, 'data');
  }


  // CREATE A User MESSAGE COMPONENT THAT ASKS QUESTIONS
  // CREATE A User DISPLAY THAT DISPLAYS THOSE MESSAGES
  // CREATE A FUNCTION THAT CHECKS THE MESSAGES WITH THE QUESTIONS AND SENDS.
  // HOLD ALL MESSAGES AND CONVO IN A CONVO STATE
  render() {
    const { data } = this.state;
    return (
      <div>
        <Display messages={data} />
        <User sendMessage={this.sendMessage.bind(this)} />
      </div>
    );
  }
}

export default App;
