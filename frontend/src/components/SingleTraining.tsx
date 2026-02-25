import type { Training } from "../models/Training"
import ExercisesCarousel from "./ExercisesCorousel";

interface Props {
    training: Training;
}

const SingleTraining = ({training}: Props) => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h3>{training.description}</h3>
      <div className="flex flex-col w-1/2">
        <ExercisesCarousel exerciseList={training.exerciseList} />
      </div>
    </div>
    </>
  )
}

export default SingleTraining