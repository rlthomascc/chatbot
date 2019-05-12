/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Display = (props) => {
  const header = () => (
    <div className="topBanner">
      <h5>
Welcome to Chatbot!
        {' '}
        <img src="https://img.icons8.com/windows/420/bot.png" width="30px" />
      </h5>
    </div>
  );
  const disp = () => {
    const { messages } = props;
    return (
      <div className="displayContainer">
        {/* <input type="text" className="form-display" id="display" /> */}
        {messages.map((elem, i) => <p id={elem.user === 'You' ? 'userBubble' : 'botBubble'} key={i}>{`${elem.user}: ${elem.message}`}</p>)}
      </div>
    );
  };

  return (
    <div>
      {header()}
      {disp()}
    </div>
  );
};

export default Display;
