import clsx from "clsx";
import { createClientMessage } from "react-chatbot-kit";
import { useSelector, useDispatch } from 'react-redux'
import { addDate } from "../features/chat/chatSlice";


interface TimingSubmitProps {
  scheduleDateTime: any;
  props: any;
  visibility: boolean
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
}

export const TimingSubmit: React.FC<TimingSubmitProps> = ({
  scheduleDateTime,
  props,
  visibility,
  setVisibility

}) => {
  //const date = useSelector(state => state.date.value)
  const dispatch = useDispatch();
  const date = useSelector((state: any) => state.chat.date)
  const { setState } = props;
  const updateState = (message: any) => {

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message]
    }))
  }

  const handleTimingSubmit = () => {
    const botMessage = createClientMessage(scheduleDateTime, {
      delay: 300
    })
    updateState(botMessage);
    props.actions.handleTime();
    setVisibility(false)
    dispatch(addDate(scheduleDateTime));
    console.log(date)
  }

  return (
    <div className={clsx("flex justify-center items-center text-center cursor-pointer", !visibility && "hidden")}>
      <div className="text-center w-[7rem] h-[2rem] bg-violet-500 font-bold shadow-lg text-white rounded-lg hover:bg-violet-600 pt-1" onClick={handleTimingSubmit}>
        Add Timings
      </div>
    </div>
  )
}


