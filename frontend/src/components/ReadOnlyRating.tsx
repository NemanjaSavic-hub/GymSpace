
const roundDownToHalf = (v: number) => Math.floor(v * 2) / 2;
const getColorForRating = (rating: number | undefined) => {
        if(rating == undefined)
            return "bg-neutral-100";
        if(rating < 1)
            return "bg-red-700";
        if(rating < 1.5)
            return "bg-red-600";
        if(rating < 2)
            return "bg-red-500";
        if(rating < 2.5)
            return "bg-orange-600";
        if(rating < 3)
            return "bg-orange-500";
        if(rating < 3.5)
            return "bg-yellow-600";
        if(rating < 4)
            return "bg-yellow-400";
        if(rating < 4.5)
            return "bg-green-400";
        if(rating < 5)
            return "bg-green-600";
        if(rating == 5)
            return "bg-green-700";
        return "bg-neutral-100";
        
    }

const ReadOnlyRating = ({ value } : {value: number}) => {
  const rounded = roundDownToHalf(value);

  return (
    <div className="rating rating-lg rating-half flex items-center pointer-events-none ml-2">
      {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((v, i) => (
        <input
          key={i}
          type="radio"
          className={`mask mask-star-2 ${
            v % 1 ? "mask-half-1" : "mask-half-2"
          } ${getColorForRating(rounded)}`}
          checked={rounded === v}
          readOnly
        />
      ))}
    </div>
  );
};

export default ReadOnlyRating