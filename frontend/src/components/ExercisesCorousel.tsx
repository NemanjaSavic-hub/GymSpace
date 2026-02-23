import type { Exercise } from "../models/Exercise"

interface Props {
    exerciseList: Exercise[]
}

const ExercisesCarousel = ({exerciseList: exerciseList}: Props) => {
    if(exerciseList.length < 1) return;
    return (
        <>
        <div className="carousel w-full">
            {exerciseList.map(exercise => 
                <div id={exercise.id.toString()} key={exercise.id} className="carousel-item w-full">
                    <img
                    src={exercise.image}
                    className="w-full" />
                </div>
            )}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
            {exerciseList.map((exercise, index) => 
                <a key={exercise.id} href={`#${exercise.id.toString()}`} className="btn btn-xs">{index + 1}</a>
            )}
        </div>
        </>
    )
}

export default ExercisesCarousel