import { useState } from "react";
import Intro from "./Intro";
import Chat from "./Chat";
import Welcome from "./Welcome";



export default function Main() {
    const [currentPage, setCurrentPage] = useState<'intro' | 'chat' | 'welcome'>('intro');

    const switchPage = (props : 'intro' | 'chat' | 'welcome') => {
        setCurrentPage(props)
    }
  return (
    <div className="min-h-full ">
        {currentPage === 'intro' && <Intro switchPage = {switchPage}/>}
        {currentPage === 'chat' && <Chat  switchPage = {switchPage}/>}
        {currentPage === 'welcome' && <Welcome  switchPage = {switchPage}/>}
    </div>
  )
}
