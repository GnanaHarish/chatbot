import clsx from "clsx";

interface CalendarBoxProps {
  date: string,
  day: string,
  isTiming: boolean,
  selectedDate: string | null,
  onDateClick: (date: string) => void,
  setScheduleDate: React.Dispatch<React.SetStateAction<string>>
  scheduleDate: string
}

export const CalendarBox: React.FC<CalendarBoxProps> = ({
  date,
  day,
  isTiming,
  selectedDate,
  onDateClick,
  setScheduleDate,
}) => {

  const handleDivClick = () => {
    onDateClick(date + " " + day);
    setScheduleDate(date + " " + day)
  }


  const isSelected = selectedDate === date + " " + day;
  console.log(isSelected)


  return (
    <div className="flex flex-col mb-10 cursor-pointer" onClick={handleDivClick}>
      <div className={clsx(`rounded-lg w-[5rem] h-[3rem]  sm:w-[12rem] sm:h-[4rem] flex flex-col text-center justify-center items-center bg-gray-400 hover:bg-violet-600 font-semibold shadow-lg`, isSelected ? 'bg-violet-600' : 'bg-gray-400')}  >
        <p className="text-white">{date}</p>
        {!isTiming && <p className="text-gray-300">{day}</p>}
      </div>

    </div>

  )
}
