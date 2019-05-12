/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import User from './components/User.js';
import Display from './components/Display.js';
import Bot from './components/Bot.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      convo: [],
      currentMessage: '',
    };
  }

  componentDidMount() {
    const { convo } = this.state;
    setTimeout(() => {
      const newArr = convo;
      newArr.push({ user: 'Bot', message: 'Hellooooooooo' });
      this.setState({ convo: newArr });
    }, 1500);
    setTimeout(() => {
      const newArr = convo;
      newArr.push({ user: 'Bot', message: 'How may I help you?' });
      this.setState({ convo: newArr });
    }, 2500);
  }


  // initialUpdate() {
  //   const { convo } = this.state;
  //   const newArr = convo;
  //   newArr.push({ user: 'Bot', message: 'Hellooooo, how may I help you?' });
  //   setTimeout(this.setState({
  //     convo: newArr,
  //   }), 1000);
  // }

  sendMessage(e) {
    const { convo, currentMessage } = this.state;
    const newArr = convo;
    newArr.push({ user: 'You', message: e });
    this.setState({
      convo: newArr,
      currentMessage: e,
    });
    this.sendBot(e);
  }

  sendBot(e) {
    const { convo } = this.state;
    setTimeout(() => {
      const newArr = convo;
      newArr.push({ user: 'Bot', message: 'What?' });
      this.setState({ convo: newArr });
      console.log('tets');
    }, 2000);
  }


  // CREATE A FUNCTION THAT CHECKS THE MESSAGES WITH THE QUESTIONS AND SENDS.
  render() {
    const { convo, currentMessage } = this.state;
    return (
      <div className="mainContainer">
        <Display messages={convo} />
        <User sendMessage={this.sendMessage.bind(this)} sendBot={this.sendBot.bind(this)} />
        <Bot message={currentMessage} />
      </div>
    );
  }
}

export default App;
