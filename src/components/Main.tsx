import { useState } from "react";
import Intro from "./Intro";
import Chat from "./Chat";
import Welcome from "./Welcome";
import { useContextPage } from "../context/context";



export default function Main() {
    // const [currentPage, setCurrentPage] = useState<'intro' | 'chat' | 'welcome'>('intro');

    // const switchPage = (props : 'intro' | 'chat' | 'welcome') => {
    //     setCurrentPage(props)
    // }
    const {currentPage} = useContextPage();
  return (
    <div className="w-full h-full ">
        {currentPage === 'intro' && <Intro />}
        {currentPage === 'chat' && <Chat />}
        {currentPage === 'welcome' && <Welcome />}
    </div>
  )
}
