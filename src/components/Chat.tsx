import { Header } from "./Header";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from '../actions/ActionProvider.js';
import config from "../actions/config.js";
import MessageParser from "../actions/MessageParser.js";




interface ChatProps {
    switchPage: (page: 'intro' | 'chat' | 'welcome') => void;
}

// onClick={() => switchPage('welcome')

const Chat: React.FC<ChatProps> = ({
    switchPage
}) => {

    return (
        <div className="h-full w-full">
            <Header switchPage={switchPage} />
            <div className="h-full w-full" id="chat-div">
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        disableScrollToBottom
                    />

            </div>
        </div>
    )
}

export default Chat;