import { useState } from "react";
import type { Review } from "../models/Review"
import ReviewItem from "./ReviewItem"

interface Props {
    reviewList: Review[],
    numberOfReviewsDefaultPreview?: number;
}

const ReviewList = ({reviewList, numberOfReviewsDefaultPreview = 2}: Props) => {
  if(reviewList.length < 1) return <p>No reviews</p>
  if(reviewList.length < numberOfReviewsDefaultPreview) {
    return (
      <div className="w-full">
        <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Reviews</li>
        {reviewList.map(review => <ReviewItem key={review.id} review={review} />)}
        </ul>
      </div>
    )
  }
  const [previewReviews, setPreviewReviews] = useState(reviewList.slice(0, numberOfReviewsDefaultPreview));
  const [counter, setCounter] = useState(1);
  const increaseCounter = () => setCounter(counter => counter + 1)
  const updatePreviewReviews = (start: number, end: number) => setPreviewReviews(reviewList.slice(start,end))
  const onClick = (start: number, end: number) => { increaseCounter(), updatePreviewReviews(start,end)}
  const reset = () => {setPreviewReviews(reviewList.slice(0, numberOfReviewsDefaultPreview)); setCounter(1)}
  return (
      <>
        <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Reviews</li>
        {previewReviews.map(review => <ReviewItem key={review.id} review={review} />)}
        </ul>
        <div className="w-full">
          {previewReviews.length < reviewList.length && <button className="btn btn-soft btn-primary" onClick={() => onClick(0, numberOfReviewsDefaultPreview * (counter + 1))}>Show more</button>}
          {previewReviews.length > numberOfReviewsDefaultPreview && <button className="btn btn-soft btn-secondary" onClick={reset}>Collapse all</button>}
        </div>
      </>
    )

}

export default ReviewList