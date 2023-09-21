import clsx from "clsx"
import { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";

interface NameAndAgeProps {
    props: any;
    setState: any;
    actionProvider: any,
    actions: any,
    payload: string
}

export const NameAndAge: React.FC<NameAndAgeProps> = (props,) => {

    const [name, setName] = useState("");
    console.log(props)
    const [visibility, setVisibility] = useState(true);

    const handleChange = (event: any) => {
        setName(event.target.value)
    }
    const { setState } = props;
    const updateState = (message: any) => {

        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))


    }

    const handleSubmitNameandAge = () => {
        const botMessage = createClientMessage(name, {
            delay: 300
        })
        updateState(botMessage);
        if (props.payload === "name") {
            props.actions.handleAge();
        }
        else {
            props.actions.handleFinalMessage();
        }
        setVisibility(false)

    }
    return (
        <div className={clsx("mt-5 w-1/2 ml-16 sm:w-1/6", !visibility && 'hidden')}>
            <label className='block text-sm font-medium leading-6 text-gray-900'>

            </label>
            <div className='mt-2'>
                <input type="text" className={clsx(`
                    form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-violet-600 sm:text-sm sm:leading-6`)} value={name} onChange={handleChange} />
            </div>
            <button className={clsx("w-[8rem] h-[2rem] rounded-md border border-[#7C3AED] text-[#8B5CF6] font-semibold mt-6")}
                onClick={handleSubmitNameandAge}
            >
                Submit
            </button>
        </div>
    )
}
