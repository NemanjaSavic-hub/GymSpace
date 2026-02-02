import type { Review } from "../models/Review"
import ReviewItem from "./ReviewItem"

interface Props {
    reviewList: Review[]
}

const ReviewList = ({reviewList}: Props) => {
    if(reviewList.length < 1) return <p>No reviews</p>
  return (
        <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Reviews</li>
        {reviewList.map(review => <ReviewItem key={review.id} review={review} />)}
        </ul>
  )
}

export default ReviewList