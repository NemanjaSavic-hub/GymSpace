import type { Gym } from "../models/Gym"
import AddReview from "./AddReview"
import ReadOnlyRating from "./ReadOnlyRating"
import ReviewList from "./ReviewList"


interface Props {
  gym: Gym
}
const GymReviewCard = ({gym}: Props) => {
  return (
    <div className="card bg-base-100 shadow-sm flex px-7">
      <figure className="px-10 pt-10">
        <img
          src={gym.image}
          alt={gym.name}
          className="rounded-xl" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{gym.name} - {gym.location}</h2>
        <div className="flex ">
          <span className="text-4xl font-bold">{gym.averageRate}</span>
          <ReadOnlyRating value={gym.averageRate} />
        </div>
        <ReviewList reviewList={gym.reviews} />
        <AddReview onSubmitProp={ (data) => console.log(data)}/>

      </div>
    </div>
  )
}

export default GymReviewCard