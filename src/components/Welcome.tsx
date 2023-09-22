import { useSelector } from "react-redux";
import { useContextPage } from "../context/context";




const Welcome= () => {
    const {setCurrentPage} = useContextPage();
    const date = useSelector((state: any) => state.chat.date);
    const name = useSelector((state: any) => state.chat.name);
    const age = useSelector((state: any) => state.chat.age);

    return (
        <div className="bg-gray-300 h-full w-full flex justify-center items-center">
            <div className="h-3/4 w-3/4 bg-gray-400 rounded-lg shadow-lg text-center flex flex-col justify-center items-center">
                <p className="font-bold text-2xl text-white indent-4"> {
                    `Your Name ${name} aged ${age} has been added to student system. You have selected timing ${date} .You may now exit.`
                } </p>
                <button onClick={() => setCurrentPage('intro')} className="mt-10 font-semibold text-white rounded-md bg-violet-500 hover:bg-violet-600 w-[7rem] p-2 shadow-lg">Exit</button>
            </div>
        </div>
    )
}

export default Welcome;