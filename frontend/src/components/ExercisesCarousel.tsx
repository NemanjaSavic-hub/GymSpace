import { useState } from "react";
import type { Exercise } from "../models/Exercise"

interface Props {
    exerciseList: Exercise[]
}

const ExercisesCarousel = ({ exerciseList }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!exerciseList.length) return null;

    return (
        <>
            <div className="w-full overflow-hidden rounded-md">
                <img
                    src={exerciseList[currentIndex].image}
                    className="w-full"
                />
            </div>

            <div className="flex w-full justify-center gap-2 py-2">
                {exerciseList.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className="btn btn-xs"
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}

export default ExercisesCarousel