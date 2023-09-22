import { Header } from "./Header";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from '../actions/ActionProvider.js';
import config from "../actions/config.js";
import MessageParser from "../actions/MessageParser.js";
import { useContextPage } from "../context/context.js";






// onClick={() => switchPage('welcome')

const Chat= () => {

    const {setCurrentPage} = useContextPage();


    return (
        <div className="h-full w-full">
            <Header setCurrentPage={setCurrentPage} />
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