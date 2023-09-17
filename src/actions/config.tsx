import { createChatBotMessage } from 'react-chatbot-kit';
import { BotAvatar } from '../components/BotAvatar';
import { UserAvatar } from '../components/UserAvatar';
import Button from '../components/Button';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`)],
  widgets: [
    {
      widgetName: 'overview',
      widgetFunc: (props: any) => <Button {...props} />,
    }
  ],
  customStyles:{
    botMessageBox: {
      backgroundColor: '#8B5CF6'
    }
  },
  customComponents: {
    header: () => <div style={{ backgroundColor: 'white', padding: "5px", borderRadius: "3px" }}></div>,
    botAvatar: (props: any) => <BotAvatar {...props}/>,
    userAvatar: (props: any) => <UserAvatar {...props}/>
  }
};

export default config;