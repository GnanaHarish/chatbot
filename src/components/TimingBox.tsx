import clsx from "clsx";

interface TimingBoxProps {
  date: string,
  day: string,
  isTiming: boolean,
  selectedDate: string | null,
  onDateClick: (date: string) => void
}

export const TimingBox: React.FC<TimingBoxProps> = ({
  date,
  day,
  isTiming,
  selectedDate,
  onDateClick
}) => {

  const handleDivClick = () => {
    onDateClick(date);
  }


  const isSelected = selectedDate === date;


  return (
    <div className="flex flex-col mb-10">
      <div className={clsx(`rounded-lg w-[5rem] h-[3rem]  sm:w-[12rem] sm:h-[4rem] flex flex-col text-center justify-center items-center bg-gray-400 hover:bg-violet-600 font-semibold shadow-lg`, isSelected ? 'bg-violet-600' : 'bg-gray-400')}  onClick={handleDivClick}>
        <p className="text-white">{date}</p>
        {!isTiming && <p className="text-gray-300">{day}</p>}
      </div>

    </div>

  )
}
