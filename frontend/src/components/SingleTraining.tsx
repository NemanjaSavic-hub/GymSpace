import type { Training } from "../models/Training"
import ExercisesCarousel from "./ExercisesCorousel";

interface Props {
    training: Training;
}

const SingleTraining = ({training}: Props) => {
  return (
    <>
    <div className="flex flex-col justify-center ">
      <p className="text-2xl pb-2 font-light">{training.description}</p>
    <div className="flex items-center justify-around">
      <div>
        {training.exerciseList.map((exercise, index) => <li key={exercise.id} className=" flex list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums mr-2">{index + 1}</div>
          <div className="list-col-grow">
            <div>{exercise.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">Sets: {training.volumeList[index].sets}</div>
            <div className="text-xs uppercase font-semibold opacity-60">Reps: {training.volumeList[index].reps}</div>
            <div className="text-xs uppercase font-semibold opacity-60">Weight: {training.volumeList[index].weight} kg</div>
          </div>
      
        </li>)}
      </div>
        <div className="w-1/2 h-auto">
          <ExercisesCarousel exerciseList={training.exerciseList} />
        </div>
     </div>
    </div>
    </>
  )
}

export default SingleTraining