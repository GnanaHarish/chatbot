

interface ChatProps{
    switchPage: (page: 'intro' | 'chat' | 'welcome') => void;
}

const Chat: React.FC<ChatProps> = ({
    switchPage
}) => {
    return (
        <div onClick={() => switchPage('welcome')}>Chat</div>
    )
}

export default Chat;