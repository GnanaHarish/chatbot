
import { CalendarBox } from "./CalendarBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CalendarStripe = () => {

  const currentDate = new Date();
  const entries = [];
  for (let i = 0; i < 10; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    const formattedDay = date.toLocaleDateString("en-US", { weekday: "short" });
    const formattedMonth = date.toLocaleDateString("en-US", { month: "short" });
    const formattedDate = date.toLocaleDateString("en-US", { day: "2-digit" });

    entries.push({
      day: formattedDay,
      month: formattedMonth,
      date: formattedDate
    });
  }
  return (
    <div className="flex flex-col">
      <div className="carousel justify-start  flex  flex-no-wrap overflow-x-scroll scrolling-touch  mb-8 gap-7 mt-10">
        {entries.map((entry, index) => (

          <div key={index} className="carousel-item">
            <CalendarBox date={entry.date + " " + entry.month} day={entry.day} />
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-semibold text-2xl">Morning</h2>
        <div className=" rounded-lg w-[12rem] h-[4rem] flex flex-col text-center justify-center items-center bg-gray-400 hover:bg-violet-600 font-semibold shadow-lg mt-10">
          <p className="text-white">9:00</p>
      </div>
      </div>
    </div>

  );
};

