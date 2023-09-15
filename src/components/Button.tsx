interface ButtonProps{
    switchPage: (page: 'intro' | 'chat' | 'welcome') => void;
}

const Button: React.FC<ButtonProps> = ({
    switchPage
}) => {
  return (
    <div className="">
        <button onClick={() => switchPage('chat')} className=" 
        my-10
                        h-10
                        w-9/12
                        justify-center
                        rounded-md
                        text-sm
                        font-semibold
                        text-white
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        bg-violet-500 hover:bg-violet-600 focus-visible:outline-violet-600">
            Enroll Now!
        </button>
    </div>
  )
}

export default Button