
import { ChevronLeft, ChevronRight } from "react-feather"

interface CarouselProps {
    children: React.ReactNode
}

export const Carousel: React.FC<CarouselProps> = ({
    children
}) => {

    const handleCarousal = (direction: string) => {
        const carousalContainer = document.querySelector('#carousal')
        if (direction == 'left') {
            if (carousalContainer)
                carousalContainer.scrollLeft -= 320;
        }
        else {
            if (carousalContainer)
                carousalContainer.scrollLeft += 320;
        }
    }

    return (
        <div className="relative w-full " id="carousal">
            <div className="flex gap-10 justify-stretch w-[200%] overflow-hidden" >
                {children}
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center p-4">
                <button
                    className="p-1 rounded-full shadow bg-gray-300 text-gray-900 hover:text-violet-600 hover:bg-white"
                    onClick={() => handleCarousal('left')}
                    style={{ zIndex: 1 }}
                >
                    <ChevronLeft size={30} />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center p-4">
                <button
                    className="p-1 rounded-full shadow bg-gray-300 text-gray-900 hover:text-violet-600 hover:bg-white"
                    onClick={() => handleCarousal('right')}
                    style={{ zIndex: 1 }}
                >
                    <ChevronRight size={30} />
                </button>
            </div>
        </div>

    )
}
