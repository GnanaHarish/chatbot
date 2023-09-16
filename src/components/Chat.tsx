import { Header } from "./Header";
import Chatbot from "react-chatbot-kit";
import ActionProvider from '../actions/ActionProvider.js';




interface ChatProps {
    switchPage: (page: 'intro' | 'chat' | 'welcome') => void;
}

// onClick={() => switchPage('welcome')

const Chat: React.FC<ChatProps> = ({
    switchPage
}) => {

    return (
        <div>
            <Header switchPage={switchPage} />
            <div className="h-full w-full App">
                <header className="App-header">
                    <Chatbot config={config} actionProvider={ActionProvider}  messageParser={MessageParser}/>
                </header>
                
            </div>
        </div>
    )
}

export default Chat;