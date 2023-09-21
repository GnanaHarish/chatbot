import React from 'react'
import { TimingBox } from './TimingBox';

interface TimingStripProps{
    session: string,
    startHour: number,
    selectedTime: string | null,
    handleSelectedTime: (date: string) => void
    length: number,
    scheduleTime: string,
    setScheduleTime: React.Dispatch<React.SetStateAction<string>>
}

export const TimingStrip: React.FC<TimingStripProps> = ({
    session,
    startHour,
    selectedTime,
    handleSelectedTime,
    length,
    scheduleTime,
    setScheduleTime
}) => {
    return (
        <>
            <h2 className="font-bold text-1xl mb-5">{session}</h2>
            <div className=" flex gap-7 overflow-hidden flex-no-wrap overflow-x-scroll scrolling-touch lg:text-center lg:justify-center cursor-pointer">
               
                {Array.from({ length: length }, (_, index) => {
                    const hour = startHour + index;
                    const time = hour >= 12 ? `${hour % 12 || 12}:00 PM` : `${hour}:00 AM`;
                    return <TimingBox
                        key={index}
                        date={time}
                        day={""}
                        isTiming={true}
                        selectedDate={selectedTime} onDateClick={handleSelectedTime}
                        scheduleTime={scheduleTime} setScheduleTime = {setScheduleTime}
                    />
                })}
            </div>
        </>
    )
}
