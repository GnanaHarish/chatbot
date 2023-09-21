
import { CalendarBox } from "./CalendarBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { TimingStrip } from "./TimingStrip";
import { TimingSubmit } from "./TimingSubmit";
import clsx from "clsx";

interface CalendarSTripeProps{
    props: any;
    setState: any;
    actionProvider: any,
    actions: any
}

export const CalendarStripe: React.FC<CalendarSTripeProps> = (
  props) => {

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [visibility, setVisibility] = useState<boolean>(true);

  const handleSelectedDate = (date: string) => {
    setSelectedDate(date)
  }

  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleSelectedTime = (time: string) => {
    setSelectedTime(time)
  }

  const [scheduleDate, setScheduleDate] = useState<string>("");
  const [scheduleTime, setScheduleTime] = useState<string>("");


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
    <div className={clsx("flex flex-col transition-all", !visibility && 'hidden')}>
      <div className="carousel justify-start  flex  flex-no-wrap overflow-x-scroll scrolling-touch  gap-7 mt-10">
        {entries.map((entry, index) => (

          <div key={index} className="carousel-item">
            <CalendarBox date={entry.date + " " + entry.month} day={entry.day} isTiming={false} selectedDate={selectedDate} onDateClick = {handleSelectedDate} scheduleDate={scheduleDate} setScheduleDate = {setScheduleDate}/>
          </div>
        ))}
      </div>
      <div>
        {/*selectedDate={selectedTime} onDateClick = {handleSelectedTime}*/ } 
        <TimingStrip  session="Morning" startHour = {9} selectedTime={selectedTime} handleSelectedTime = {handleSelectedTime} length={3} scheduleTime={scheduleTime} setScheduleTime = {setScheduleTime}/>
        <TimingStrip  session="Afternoon" startHour = {12} selectedTime={selectedTime} handleSelectedTime = {handleSelectedTime} length={5} scheduleTime={scheduleTime} setScheduleTime = {setScheduleTime}/>
        <TimingStrip  session="Evening" startHour = {17} selectedTime={selectedTime} handleSelectedTime = {handleSelectedTime} length={4} scheduleTime={scheduleTime} setScheduleTime = {setScheduleTime}/>
      </div>
      {(scheduleDate !== "" && scheduleTime !== "") && <TimingSubmit scheduleDateTime = {scheduleDate +" "+ scheduleTime} props={props} visibility={visibility} setVisibility={setVisibility}/>}
    </div>

  );
};

