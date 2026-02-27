import { useId } from "react";
import type { Exercise } from "../models/Exercise"

interface Props {
    exerciseList: Exercise[]
}

const ExercisesCarousel = ({exerciseList}: Props) => {
    if(!exerciseList.length) return null;
    const carouselId = useId();
    return (
        <>
        <div className="carousel w-full">
            {exerciseList.map(exercise => {
                const uniqueId = `${carouselId}-${exercise.id}`;
                return (
                <div id={uniqueId} key={uniqueId} className="carousel-item w-full">
                    <img
                    src={exercise.image}
                    className="w-full rounded-md " />
                </div>
                );
            }
            )}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
            {exerciseList.map((exercise, index) => {
                const uniqueId = `${carouselId}-${exercise.id}`;
                return (
                <a key={exercise.id} href={`#${uniqueId}`} className="btn btn-xs">{index + 1}</a>
                );
            }
            )}
        </div>
        </>
    )
}

export default ExercisesCarousel