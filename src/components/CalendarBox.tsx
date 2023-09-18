
interface CalendarBoxProps{
    date: string,
    day: string
}

export const CalendarBox: React.FC<CalendarBoxProps> = ({
    date,
    day
}) => {
  return (
    <div className=" rounded-lg w-[14rem] h-[4rem] flex flex-col text-center justify-center items-center bg-violet-500 hover:bg-violet-600 font-semibold shadow-lg">
          <p className="text-white">{date}</p>
          <p className="text-gray-300">{day}</p>
    </div>
  )
}
