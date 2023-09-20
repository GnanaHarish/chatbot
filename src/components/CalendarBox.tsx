
interface CalendarBoxProps{
    date: string,
    day: string,
    isTiming: boolean
}

export const CalendarBox: React.FC<CalendarBoxProps> = ({
    date,
    day,
    isTiming
}) => {
  return (
    <div className="flex flex-col mb-10">
      <div className=" rounded-lg w-[5rem] h-[3rem]  sm:w-[12rem] sm:h-[4rem] flex flex-col text-center justify-center items-center bg-gray-400 hover:bg-violet-600 font-semibold shadow-lg ">
          <p className="text-white">{date}</p>
          {!isTiming && <p className="text-gray-300">{day}</p>}
      </div>
     
    </div>
    
  )
}
