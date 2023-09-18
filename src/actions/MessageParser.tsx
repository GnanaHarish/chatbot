import React from 'react';

interface MessageParserProps{
  children: any,
  actions: any,
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string) => {
    if(message.toLowerCase().includes('hi')){
      actions.handleHello();
    }

    if(message.toLowerCase().includes('got it')){
      actions.handleGotIt();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;