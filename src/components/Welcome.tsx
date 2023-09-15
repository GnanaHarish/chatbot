

interface WelcomeProps{
    switchPage: (page: 'intro' | 'chat' | 'welcome') => void;
}

const Welcome: React.FC<WelcomeProps> = ({
    switchPage
}) => {
    return (
        <div onClick={() => switchPage('welcome')}>Welcome</div>
    )
}

export default Welcome;