import { createChatBotMessage } from 'react-chatbot-kit';
import { BotAvatar } from '../components/BotAvatar';
import { UserAvatar } from '../components/UserAvatar';
import { GotIt } from '../components/GotIt';
import  {CalendarStripe}  from '../components/CalendarStripe';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
    withAvatar: true,
    delay: 500,
    widget: 'overview',
  }
  ),],
  widgets: [
    {
      widgetName: 'overview',
      widgetFunc: (props: any) => <GotIt {...props}  />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: 'calendar',
      widgetFunc: (props: any) => <CalendarStripe {...props} />,
      mapStateToProps: ["messages"]
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