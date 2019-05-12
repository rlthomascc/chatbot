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


  sendMessage(e) {
    const { convo, currentMessage } = this.state;
    const newArr = convo;
    newArr.push({ user: 'You', message: e });
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
    const replies = [{
      keywords: 'what is your name?',
      reply: 'My name is Chatbot.',
    },
    {
      keywords: 'what do you do?',
      reply: 'I respond to your questions, simplifying your usability.',
    }];
    replies.forEach((elem, i) => {
      arr.forEach((word, i) => {
        // ITERATE THROUGH THE WORDS, SEARCH THE WORDS AND CONNECT THEM WITH THE QUESTIONS ABOVE,
        // TALLY THE WORDS TO THE QUESTION, WHO EVER HAS THE MOST TALLIES IS THE REPLY.
        if (elem.keywords.includes(word)) {
          setTimeout(() => {
            newArr.push({ user: 'Bot', message: elem.reply });
            this.setState({
              convo: newArr,
            });
          }, 1000);
        }
        console.log(elem.keywords.includes(word.toLowerCase()));
      });
    });
  }


  // CREATE A FUNCTION THAT CHECKS THE MESSAGES WITH THE QUESTIONS AND SENDS.
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
