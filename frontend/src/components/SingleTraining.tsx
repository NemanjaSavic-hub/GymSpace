import type { Training } from "../models/Training"
import ExercisesCarousel from "./ExercisesCorousel";

interface Props {
    training: Training;
}

const SingleTraining = ({training}: Props) => {
  return (
    <>
    <ExercisesCarousel exerciseList={training.exerciseList} />
    </>
  )
}

export default SingleTraining