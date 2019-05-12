/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Display = (props) => {
  const disp = () => {
    const { messages } = props;
    console.log(messages, 'MESSAGES');
    return (
      <div className="displayContainer">
        {messages.map((elem, i) => <p key={i}>{elem}</p>)}
      </div>
    );
  };

  return (
    disp()
  );
};

export default Display;
