import type { Gym } from "../models/Gym"
import ReadOnlyRating from "./ReadOnlyRating"

interface Props {
  gym: Gym
}
const GymReviewCard = ({gym}: Props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={gym.image}
          alt={gym.name}
          className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{gym.name} - {gym.location}</h2>
        <div className="flex ">
          <span className="text-4xl font-bold">{gym.averageRate}</span>
          <ReadOnlyRating value={gym.averageRate} />
          {/* <HalfStarRating ariaCurrent={4}/> */}
        </div>
        {gym.reviews.map((review, index) => 
        <div key={index}>
          <p>{review.text}</p>
        </div>
         )}
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default GymReviewCard