
import { CalendarBox } from "./CalendarBox";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const CalendarStripe = () => {
 



  return (
    <div className="flex gap-2 w-full pt-10 justify-around">
      
      <div className="flex flex-row gap-7 w-full p-2">
      
        <div className="max-h-96 overflow-auto">
        
          <div className=" flex gap-3 justify-stretch w-[200%] ">
            
            <CalendarBox date={"5 May"} day={"FRI"} />
            <CalendarBox date={"6 May"} day={"SAT"} />
            <CalendarBox date={"6 May"} day={"SAT"} />
            <CalendarBox date={"6 May"} day={"SAT"} />
            <CalendarBox date={"6 May"} day={"SAT"} />
            <CalendarBox date={"6 May"} day={"SAT"} />
            
          </div>
         
        </div>
        
      </div>
     
    </div>
  );
};

