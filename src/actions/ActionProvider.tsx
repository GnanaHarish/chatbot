import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

interface ActionProviderProps {
  createChatBotMessage: any,
  setState: any,
  children: any
}

const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState, children }) => {

  const updateState = (message: any) => {

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message]
    }))
  }

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello!, Nice to meet you!', {
      delay: 300,
    });
    updateState(botMessage)
  }

  const handleGotIt = () => {
    const clientMessage = createClientMessage('Got It!', {
      delay: 300,
    });
    updateState(clientMessage);
    const botMessage = createChatBotMessage('Pick a slot', {
      delay: 600,
      widget: 'calendar'
    });
    updateState(botMessage)
    
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGotIt
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;