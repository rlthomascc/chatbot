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
import returnResponse from '../../helpers/ai';

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
      newArr.unshift({ user: 'Chatbot', message: 'Hellooooooooo', timeStamp: Date.now() });
      this.setState({ convo: newArr });
    }, 1500);
    setTimeout(() => {
      const newArr = convo;
      newArr.unshift({ user: 'Chatbot', message: 'How may I help you?', timeStamp: Date.now() });
      this.setState({ convo: newArr });
    }, 2500);
  }


  sendMessage(e) {
    const { convo, currentMessage } = this.state;
    const newArr = convo;
    newArr.unshift({ user: 'You', message: e, timeStamp: Date.now() });
    this.setState({
      convo: newArr,
      currentMessage: e,
    });
    this.botResponse(e);
  }

  botResponse(e) {
    const { convo } = this.state;
    const newArr = convo;
    const arr = e.split(' ');
    const bringItBack = (obj) => {
      // Sort incoming replies
      const replies = obj.sort((a, b) => a.count - b.count);
      setTimeout(() => {
        // Take last reply (which is the max count reply) and send to client
        newArr.unshift({ user: 'Chatbot', message: replies[replies.length - 1].reply, timeStamp: Date.now() });
        this.setState({
          convo: newArr,
        });
      }, 1000);
    };
    returnResponse(arr, bringItBack);
    console.log(convo);
  }


  render() {
    const { convo, currentMessage } = this.state;
    return (
      <div className="mainContainer">
        <Display messages={convo} />
        <User sendMessage={this.sendMessage.bind(this)} />
        <Bot message={currentMessage} />
      </div>
    );
  }
}

export default App;
