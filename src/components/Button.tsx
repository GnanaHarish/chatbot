import clsx from "clsx";

interface ButtonProps{
    text: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<'intro' | 'chat' | 'welcome'>>
}

const Button: React.FC<ButtonProps> = ({
    text,
    setCurrentPage
}) => {
  
  return (
    <div className="">
        <button onClick={() => {
          setCurrentPage('chat')
        }} className={clsx(
          `my-10 h-10 w-9/12 justify-center rounded-md text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-violet-500 hover:bg-violet-600 focus-visible:outline-violet-600`
        )}>
            {text}
        </button>
    </div>
  )
}

export default Button