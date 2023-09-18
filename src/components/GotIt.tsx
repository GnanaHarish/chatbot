import clsx from "clsx";
import { useEffect, useState } from "react";

interface GotItProps {
    props: any;
    setState: any;
    actionProvider: any,
    actions: any
}

export const GotIt: React.FC<GotItProps> = (
    props
) => {
    console.log(props)
    const { setState } = props;
    useEffect(() => {
        setState((state: any) => ({ ...state, value: 'Got It' }))
    }, [])

    

    const [visibility, setVisibility] = useState(true);

    const handleGotIt = () => {
        props.actions.handleGotIt();
        setVisibility(false);
    }
    console.log(props)

    return (
        <button className={clsx("w-[8rem] h-[2rem] rounded-md border border-[#7C3AED] text-[#8B5CF6] font-semibold  ml-[8rem]", !visibility && 'hidden')}
            onClick={() => {
                handleGotIt()
            }}
        >
            Got it!
        </button>
    )
}
