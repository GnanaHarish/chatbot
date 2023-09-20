
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
      <div className="carousel justify-start  flex  flex-no-wrap overflow-x-scroll scrolling-touch  gap-7 mt-10">
        {entries.map((entry, index) => (

          <div key={index} className="carousel-item">
            <CalendarBox date={entry.date + " " + entry.month} day={entry.day} isTiming={false} />
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-bold text-1xl mb-5">Morning</h2>
        <div className=" flex gap-7 overflow-hidden flex-no-wrap overflow-x-scroll scrolling-touch lg:text-center lg:justify-center">
          {Array.from({ length: 3 }, (_, index) => (
            <CalendarBox
              key={index}
              date={`${9 + index}:00 AM`}
              day={""}
              isTiming={true}
            />
          ))}
        </div>
        <h2 className="font-bold text-1xl mb-5">Afternoon</h2>
        <div className=" flex gap-7 overflow-hidden flex-no-wrap overflow-x-scroll scrolling-touch lg:text-center lg:justify-center flex-grow">
          {Array.from({ length: 4 }, (_, index) => {
            const hour = 12 + index;
            const time = hour >= 12 ? `${hour % 12 || 12}:00 PM` : `${hour}:00 AM`;
            return <CalendarBox
              key={index}
              date={time}
              day={""}
              isTiming={true}
            />
          })}
        </div>
        <h2 className="font-bold text-1xl mb-5">Evening</h2>
        <div className=" flex gap-7 overflow-hidden flex-no-wrap overflow-x-scroll scrolling-touch lg:text-center lg:justify-center flex-grow">
        {Array.from({ length: 4 }, (_, index) => {
            const hour = 16 + index;
            const time = hour >= 12 ? `${hour % 12 || 12}:00 PM` : `${hour}:00 AM`;
            return <CalendarBox
              key={index}
              date={time}
              day={""}
              isTiming={true}
            />
          })}
        </div>
      </div>
    </div>

  );
};

