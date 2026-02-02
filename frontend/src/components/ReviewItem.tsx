import type { Review } from "../models/Review"
import ReadOnlyRating from "./ReadOnlyRating"

interface Props {
  review: Review
}

const ReviewItem = ({review}: Props) => {
  return (


        <li className="list-row ">
          <div>
            <div className="text-xl">{review.user.username}
                <ReadOnlyRating value={review.rate} />{review.rate}
               <a className="text-xs uppercase font-semibold opacity-60 ml-2">{review.dateTime}</a>
               </div>
            <p className="list-col-wrap font-mono mt-2">{review.text}</p>
          </div>
        </li>

  )
}

export default ReviewItem