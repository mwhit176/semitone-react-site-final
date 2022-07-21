// From: https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/create-a-response/

import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
      if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi') || message.toLowerCase().includes('hey')) {
        actions.handleHello();
      }
    };
  
    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse: parse,
            actions,
          });
        })}
      </div>
    );
  };

  export default MessageParser;