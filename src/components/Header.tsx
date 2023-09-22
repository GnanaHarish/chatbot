import { AiFillCaretLeft } from "react-icons/ai"
import { BiSolidBot } from "react-icons/bi"

interface HeaderProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<'intro' | 'chat' | 'welcome'>>
}

export const Header: React.FC<HeaderProps> = ({
    setCurrentPage
}) => {
    return (
        <div className="sticky z-10 h-16 min-w-full flex  bg-gray-200 shadow-md items-center justify-around  rounded-md ">
            <AiFillCaretLeft onClick={() => setCurrentPage('intro')} className='cursor-pointer'/>
            <BiSolidBot size={40} className='items-center justify-center text-center mx-10  ' />
            <h3 className="font-semibold"> welcome!</h3>
        </div>
    )
}
