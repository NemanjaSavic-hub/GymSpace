interface Props {
    username?: string
}

const AddReview = () => {
    return (
        <>
        <div className="flex w-full">
            <label className="text-xl">Give rating:</label>
            <div className="rating">
                <input type="radio" name="rating-2" className="rating-hidden" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>
        </div>
        <div className="w-full ">
            <textarea placeholder="Type here" className="font-mono border-2 rounded-2xl border-gray-500 w-full px-3 py-2" rows={5}  />
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Write review</button>
        </div>
        </>
    )
}

export default AddReview