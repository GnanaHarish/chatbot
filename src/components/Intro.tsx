import Button from "./Button";
import { PiStudentFill } from "react-icons/pi";
import { AiOutlineCaretRight } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";

interface IntroProps{
    switchPage: (page: 'intro' | 'chat' | 'welcome') => void;
}

const Intro: React.FC<IntroProps> = ({
    switchPage
}) => {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center bg-gray-100 ">
            <div className=" h-[20rem] w-[20rem] lg:h-[20rem] lg:w-[40rem] rounded-lg bg-white text-center text-3xl  text-gray-900 font-bold pt-10 relative ">
                Enter Into Student Info System
                <div className="flex flex-row items-center justify-center pt-8 mt-4 mb-4 gap-6">
                <PiStudentFill />
                <AiOutlineCaretRight />
                <GrContactInfo/>
                </div>
                <Button switchPage={switchPage}/>
            </div>
        </div>

    )
}

export default Intro;