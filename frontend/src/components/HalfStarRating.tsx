interface Props{
    defaultChecked:number
}

interface InputProp {
    maskClass: string,

}
// {defaultChecked}: Props
const HalfStarRating = () => {
    const getColorForRating = (rating: number) => {
        if(rating < 1)
            return "bg-red-700";
        if(rating <= 1.5)
            return "bg-red-600";
        if(rating <= 2)
            return "bg-red-500";
        if(rating <= 2.5)
            return "bg-orange-600";
        if(rating <= 3)
            return "bg-orange-500";
        if(rating <= 3.5)
            return "bg-yellow-600";
        if(rating <= 4)
            return "bg-yellow-700";
        if(rating <= 4.5)
            return "bg-green-400";
        if(rating < 5)
            return "bg-green-600";
        if(rating == 5)
            return "bg-red-700";
        return "bg-neutral-100";
        
    }
    const inputs = [1,2,3,4,5,6,7,8,9,10]
    const colors = ["bg-red-700", "bg-red-600", "bg-red-500", "bg-orange-600"]
    return (
        <div className="rating rating-lg rating-half flex items-center">
            <input type="radio" name="rating-11" className="rating-hidden" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-red-700" aria-label="0.5 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-red-600" aria-label="1 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-red-500" aria-label="1.5 star" defaultChecked />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-orange-600" aria-label="2 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-orange-500" aria-label="2.5 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-yellow-600" aria-label="3 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-yellow-500" aria-label="3.5 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-400" aria-label="4 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-600" aria-label="4.5 star" />
            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-700" aria-label="5 star" />
        </div>
    )
}

export default HalfStarRating

        // switch(rating){
        //     case 0.5:
            
        //         return "bg-red-700";
        //     case 1:
        //         return "bg-red-600";
        //     case 1.5:
        //         return "bg-red-500";
        //     case 2:
        //         return "bg-orange-600";
        //     case 2.5:
        //         return "bg-orange-500";
        //     case 3:
        //         return "bg-yellow-600";
        //     case 3.5:
        //         return "bg-yellow-700";
        //     case 4:
        //         return "bg-green-400";
        //     case 4.5:
        //         return "bg-green-600";
        //     case 5:
        //         return "bg-green-700";
        //     default:
        //         return "";
        // }