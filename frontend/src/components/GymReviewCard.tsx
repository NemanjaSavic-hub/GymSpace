import { useQueryClient } from "react-query"
import useAuthContext from "../hooks/useAuthContext"
import { useMakeReview } from "../hooks/useMakeReview"
import type { Gym } from "../models/Gym"
import AddReview from "./AddReview"
import ReadOnlyRating from "./ReadOnlyRating"
import ReviewList from "./ReviewList"


interface Props {
  gym: Gym
}
const GymReviewCard = ({gym}: Props) => {
  const {user} = useAuthContext();
  const {mutate: makeReview, isLoading, isError} = useMakeReview();
  const queryClient = useQueryClient();
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
          <span className="text-4xl font-bold">{Math.round(gym.averageRate * 100) / 100}</span>
          <ReadOnlyRating value={gym.averageRate} />
        </div>
        <ReviewList reviewList={gym.reviews} />
        <AddReview onSubmitProp={ (data) => 
          makeReview(
            {userId: user.id, gymId: gym.id, text: data.text, rate: data.rating},
            {onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: ["gyms"]
              })
              // queryClient.fetchInfiniteQuery({
              //   queryKey: ["gyms"]
              // })
            }}
          )
        }/>
        {isLoading && <p>Making review...</p>}
        {isError && <p className="text-error"> Error during making review</p> }
      </div>
    </div>
  )
}

export default GymReviewCard